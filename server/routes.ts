import { type Express, type Request, type Response } from "express";
import { db } from "./db";
import * as schema from "@shared/schema";
import { z } from "zod";

// Updated referral validation schema (matches schema.ts)
const referralSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    needsAssessment: z.string().min(50),
    referralSource: z.string().min(2),
    additionalNotes: z.string().optional(),

    // NEW FIELDS
    guardianName: z.string().min(2, "Guardian name is required"),
    referredPersonName: z.string().min(2, "Referred person name is required"),

    canCollectDOB: z.enum(["yes", "no"], {
      required_error: "Please specify if DOB can be collected",
    }),

    // Optional but conditionally required
    dob: z.string().optional(),
    ageGroup: z.enum(["under18", "over18"]).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.canCollectDOB === "yes" && !data.dob) {
      ctx.addIssue({
        code: "custom",
        message: "DOB is required if you selected yes",
        path: ["dob"],
      });
    }
    if (data.canCollectDOB === "no" && !data.ageGroup) {
      ctx.addIssue({
        code: "custom",
        message: "Please choose over/under 18",
        path: ["ageGroup"],
      });
    }
  });

export function registerRoutes(app: Express) {
  // POST /api/referrals
  app.post("/api/referrals", async (req: Request, res: Response) => {
    try {
      const parsed = referralSchema.parse(req.body);

      await db.insert(schema.referrals).values(parsed);

      return res.json({
        success: true,
        message: "Referral saved successfully",
      });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: err.errors,
        });
      }

      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }
  });

  // GET /api/referrals
  app.get("/api/referrals", async (_req, res) => {
    const list = await db.select().from(schema.referrals);
    res.json(list);
  });
}

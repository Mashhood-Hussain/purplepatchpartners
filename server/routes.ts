import { type Express, type Request, type Response } from "express";
import { db } from "./db";
import * as schema from "@shared/schema";
import { z } from "zod";

// ==============================
// Zod Validation Schema
// ==============================
const referralSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[\d\s+()-]{8,}$/, "Invalid phone number"),
  needsAssessment: z
    .string()
    .min(50, "Needs Assessment must be at least 50 characters long"),
  referralSource: z.string().min(2, "Referral Source is required"),
  additionalNotes: z.string().optional(),
});

// ==============================
// Route Registration Function
// ==============================
export function registerRoutes(app: Express) {
  // ================
  // POST /api/referrals
  // ================
  app.post("/api/referrals", async (req: Request, res: Response) => {
    try {
      // ✅ Validate request body
      const parsed = referralSchema.parse(req.body);

      // ✅ Insert into DB using Drizzle ORM
      await db.insert(schema.referrals).values({
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        needsAssessment: parsed.needsAssessment,
        referralSource: parsed.referralSource,
        additionalNotes: parsed.additionalNotes || null,
      });

      // ✅ Success response
      return res.json({
        success: true,
        message: "Referral submitted successfully!",
      });
    } catch (err: any) {
      // Handle validation errors
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: err.errors.map((e) => e.message),
        });
      }

      console.error("Referral submission failed:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database or server error" });
    }
  });

  // ================
  // GET /api/referrals (optional)
  // ================
  // You can use this to view all referrals (or filter by user later)
  app.get("/api/referrals", async (_req: Request, res: Response) => {
    try {
      const referrals = await db.select().from(schema.referrals).orderBy(schema.referrals.createdAt);
      res.json({ success: true, data: referrals });
    } catch (err) {
      console.error("Error fetching referrals:", err);
      res.status(500).json({ success: false, message: "Failed to fetch referrals" });
    }
  });
}

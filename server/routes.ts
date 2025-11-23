import { type Express, type Request, type Response } from "express";
import { db } from "./db";
import * as schema from "@shared/schema";
import { z } from "zod";

// -----------------------------
// Validation schemas from schema.ts
// -----------------------------
const referralSchema = schema.insertReferralSchema;
const contactSchema = schema.insertContactSchema;

// -----------------------------
// Register all routes
// -----------------------------
export function registerRoutes(app: Express) {
  // -----------------------------
  // POST /api/referrals
  // -----------------------------
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
    try {
      const list = await db.select().from(schema.referrals);
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Database error" });
    }
  });

  // -----------------------------
  // POST /api/contact
  // -----------------------------
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const parsed = contactSchema.parse(req.body);

      await db.insert(schema.contact_messages).values(parsed);

      return res.json({
        success: true,
        message: "Message sent successfully",
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

  // GET /api/contact
  app.get("/api/contact", async (_req, res) => {
    try {
      const list = await db.select().from(schema.contact_messages);
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Database error" });
    }
  });
}

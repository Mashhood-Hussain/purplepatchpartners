import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Referrals table for storing form submissions
export const referrals = pgTable(
  "referrals",
  {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),

    // Existing fields
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    needsAssessment: text("needs_assessment").notNull(),
    referralSource: text("referral_source").notNull(),
    additionalNotes: text("additional_notes"),

    // ============================
    // NEW GDPR-compliant fields
    // ============================
    guardianName: text("guardian_name").notNull(),
    referredPersonName: text("referred_person_name").notNull(),

    // "yes" / "no"
    canCollectDOB: text("can_collect_dob").notNull(),

    // Optional depending on canCollectDOB
    dob: text("dob"), // store as ISO string
    ageGroup: text("age_group"), // "under18" or "over18"

    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    // Helpful indexes
    emailIdx: index("idx_referrals_email").on(table.email),
    createdAtIdx: index("idx_referrals_created_at").on(table.createdAt),
  })
);

// ============================
// Validation schema for form inputs
// ============================
export const insertReferralSchema = createInsertSchema(referrals)
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    needsAssessment: z.string().min(
      50,
      "Please provide detailed information about the needs (at least 50 characters)"
    ),

    guardianName: z.string().min(2, "Guardian name is required"),
    referredPersonName: z.string().min(2, "Please enter the referred person's name"),

    canCollectDOB: z.enum(["yes", "no"], {
      required_error: "Please select if DOB can be collected",
    }),

    dob: z.string().optional(),
    ageGroup: z.enum(["under18", "over18"]).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.canCollectDOB === "yes" && !data.dob) {
      ctx.addIssue({
        code: "custom",
        message: "Date of birth is required if it can be collected",
        path: ["dob"],
      });
    }

    if (data.canCollectDOB === "no" && !data.ageGroup) {
      ctx.addIssue({
        code: "custom",
        message: "Please select whether the referred person is over or under 18",
        path: ["ageGroup"],
      });
    }
  });

export type InsertReferral = z.infer<typeof insertReferralSchema>;
export type Referral = typeof referrals.$inferSelect;

// (Unchanged) Interface definitions for gallery and stories
export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: "all" | "activities" | "achievements" | "events";
}

export interface Story {
  id: string;
  title: string;
  personName: string;
  isAnonymous: boolean;
  quote: string;
  fullStory: string;
  imageUrl: string;
  videoUrl?: string;
}

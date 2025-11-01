import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Referrals table for storing form submissions
export const referrals = pgTable(
  "referrals",
  {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    needsAssessment: text("needs_assessment").notNull(),
    referralSource: text("referral_source").notNull(),
    additionalNotes: text("additional_notes"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    // Add helpful indexes
    emailIdx: index("idx_referrals_email").on(table.email),
    createdAtIdx: index("idx_referrals_created_at").on(table.createdAt),
  })
);

// Validation schema for form inputs
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

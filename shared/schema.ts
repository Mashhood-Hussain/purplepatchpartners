import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ============================
// REFERRALS TABLE
// ============================
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

    // GDPR-compliant fields
    guardianName: text("guardian_name").notNull(),
    referredPersonName: text("referred_person_name").notNull(),
    canCollectDOB: text("can_collect_dob").notNull(), // "yes"/"no"
    dob: text("dob"), // optional if canCollectDOB = yes
    ageGroup: text("age_group"), // optional if canCollectDOB = no

    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    emailIdx: index("idx_referrals_email").on(table.email),
    createdAtIdx: index("idx_referrals_created_at").on(table.createdAt),
  })
);

// Drizzle-Zod schema for referral validation
export const insertReferralSchema = createInsertSchema(referrals)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    needsAssessment: z.string().min(
      50,
      "Please provide detailed information about the needs (at least 50 characters)"
    ),
    guardianName: z.string().min(2, "Guardian name is required"),
    referredPersonName: z.string().min(2, "Please enter the referred person's name"),
    canCollectDOB: z.enum(["yes", "no"], { required_error: "Please select if DOB can be collected" }),
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

// ============================
// CONTACT MESSAGES TABLE
// ============================
export const contact_messages = pgTable(
  "contact_messages",
  {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    emailIdx: index("idx_contact_email").on(table.email),
    createdAtIdx: index("idx_contact_created_at").on(table.createdAt),
  })
);

// Drizzle-Zod schema for contact messages
export const insertContactSchema = createInsertSchema(contact_messages)
  .omit({ id: true, createdAt: true })
  .extend({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contact_messages.$inferSelect;

// ============================
// Other interfaces (unchanged)
// ============================
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

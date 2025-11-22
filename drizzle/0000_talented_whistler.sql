CREATE TABLE "referrals" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"needs_assessment" text NOT NULL,
	"referral_source" text NOT NULL,
	"additional_notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "idx_referrals_email" ON "referrals" USING btree ("email");--> statement-breakpoint
CREATE INDEX "idx_referrals_created_at" ON "referrals" USING btree ("created_at");
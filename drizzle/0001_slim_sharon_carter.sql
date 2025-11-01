CREATE INDEX "idx_referrals_email" ON "referrals" USING btree ("email");
CREATE INDEX "idx_referrals_created_at" ON "referrals" USING btree ("created_at");

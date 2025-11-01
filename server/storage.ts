// Reference: javascript_database integration blueprint
import { referrals, type Referral, type InsertReferral } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createReferral(insertReferral: InsertReferral): Promise<Referral>;
  getReferral(id: string): Promise<Referral | undefined>;
  getAllReferrals(): Promise<Referral[]>;
}

export class DatabaseStorage implements IStorage {
  async createReferral(insertReferral: InsertReferral): Promise<Referral> {
    const [referral] = await db
      .insert(referrals)
      .values(insertReferral)
      .returning();
    return referral;
  }

  async getReferral(id: string): Promise<Referral | undefined> {
    const [referral] = await db
      .select()
      .from(referrals)
      .where(eq(referrals.id, id));
    return referral || undefined;
  }

  async getAllReferrals(): Promise<Referral[]> {
    return await db
      .select()
      .from(referrals)
      .orderBy(desc(referrals.createdAt));
  }
}

export const storage = new DatabaseStorage();

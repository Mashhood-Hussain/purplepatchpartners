import { defineConfig } from "drizzle-kit";
import "dotenv/config"; // ✅ ensures DATABASE_URL loads from .env

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing — check your .env file");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./shared/schema.ts",   // ✅ Path to your Drizzle schema
  out: "./drizzle",               // ✅ Store migrations + meta here
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

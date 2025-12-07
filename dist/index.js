var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import "dotenv/config";
import express2 from "express";

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    if (url.startsWith("/api")) return next();
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contact_messages: () => contact_messages,
  insertContactSchema: () => insertContactSchema,
  insertReferralSchema: () => insertReferralSchema,
  referrals: () => referrals
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var referrals = pgTable(
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
    canCollectDOB: text("can_collect_dob").notNull(),
    // "yes"/"no"
    dob: text("dob"),
    // optional if canCollectDOB = yes
    ageGroup: text("age_group"),
    // optional if canCollectDOB = no
    createdAt: timestamp("created_at").defaultNow().notNull()
  },
  (table) => ({
    emailIdx: index("idx_referrals_email").on(table.email),
    createdAtIdx: index("idx_referrals_created_at").on(table.createdAt)
  })
);
var insertReferralSchema = createInsertSchema(referrals).omit({ id: true, createdAt: true }).extend({
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
  ageGroup: z.enum(["under18", "over18"]).optional()
}).superRefine((data, ctx) => {
  if (data.canCollectDOB === "yes" && !data.dob) {
    ctx.addIssue({
      code: "custom",
      message: "Date of birth is required if it can be collected",
      path: ["dob"]
    });
  }
  if (data.canCollectDOB === "no" && !data.ageGroup) {
    ctx.addIssue({
      code: "custom",
      message: "Please select whether the referred person is over or under 18",
      path: ["ageGroup"]
    });
  }
});
var contact_messages = pgTable(
  "contact_messages",
  {
    id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
  },
  (table) => ({
    emailIdx: index("idx_contact_email").on(table.email),
    createdAtIdx: index("idx_contact_created_at").on(table.createdAt)
  })
);
var insertContactSchema = createInsertSchema(contact_messages).omit({ id: true, createdAt: true }).extend({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

// server/db.ts
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/routes.ts
import { z as z2 } from "zod";
var referralSchema = insertReferralSchema;
var contactSchema = insertContactSchema;
function registerRoutes(app2) {
  app2.post("/api/referrals", async (req, res) => {
    try {
      const parsed = referralSchema.parse(req.body);
      await db.insert(referrals).values(parsed);
      return res.json({
        success: true,
        message: "Referral saved successfully"
      });
    } catch (err) {
      if (err instanceof z2.ZodError) {
        return res.status(400).json({
          success: false,
          errors: err.errors
        });
      }
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database error"
      });
    }
  });
  app2.get("/api/referrals", async (_req, res) => {
    try {
      const list = await db.select().from(referrals);
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Database error" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const parsed = contactSchema.parse(req.body);
      await db.insert(contact_messages).values(parsed);
      return res.json({
        success: true,
        message: "Message sent successfully"
      });
    } catch (err) {
      if (err instanceof z2.ZodError) {
        return res.status(400).json({
          success: false,
          errors: err.errors
        });
      }
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database error"
      });
    }
  });
  app2.get("/api/contact", async (_req, res) => {
    try {
      const list = await db.select().from(contact_messages);
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Database error" });
    }
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.get("/api/test", (_req, res) => {
  res.json({
    success: true,
    message: "Backend is connected successfully!"
  });
});
registerRoutes(app);
(async () => {
  const port = parseInt(process.env.PORT || "5000", 10);
  const mode = process.env.NODE_ENV || "development";
  if (mode === "development") {
    await setupVite(app, null);
  } else {
    serveStatic(app);
  }
  app.listen(port, "0.0.0.0", () => {
    log(`\u2705 Server running on http://localhost:${port} (${mode} mode)`);
  });
})();

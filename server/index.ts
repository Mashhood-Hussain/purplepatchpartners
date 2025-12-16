import "dotenv/config";
import express, { type Request, Response } from "express";
import { setupVite, serveStatic, log } from "./vite";
import { registerRoutes } from "./routes"; // ✅ Use your route definitions

const app = express();

// =====================
// Middleware
// =====================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// =====================
// Test Route
// =====================
app.get("/api/test", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Backend is connected successfully!",
  });
});

// =====================
// Register all API routes
// =====================
registerRoutes(app); // ✅ includes your validated /api/referrals etc.

// =====================
// Frontend (Vite or static)
// =====================
(async () => {
  const port = parseInt(process.env.PORT || "5000", 10);
  const mode = process.env.NODE_ENV || "development";

  if (mode === "development") {
    // Vite middleware for hot module reload
    await setupVite(app, null as any);
  } else {
    // Serve the built static files in production
    serveStatic(app);
  }

  // ✅ Use 0.0.0.0 so it works on Render, Railway, etc.
  app.listen(port, "0.0.0.0", () => {
    log(`✅ Server running on http://localhost:${port} (${mode} mode)`);
  });
})();


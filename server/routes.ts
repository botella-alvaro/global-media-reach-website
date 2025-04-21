import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAuditRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve React app in production, health check otherwise
  app.get("/", (req, res) => {
    if (process.env.NODE_ENV === "production") {
      res.sendFile("index.html", { root: "./dist/public" });
    } else {
      res.status(200).json({ status: "ok" });
    }
  });

  // API endpoint for submitting audit requests
  app.post("/api/audit-request", async (req, res) => {
    try {
      const validatedData = insertAuditRequestSchema.parse(req.body);
      const auditRequest = await storage.createAuditRequest(validatedData);
      
      res.status(201).json({
        message: "Audit request submitted successfully",
        data: auditRequest
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Failed to submit audit request",
        error: (error as Error).message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

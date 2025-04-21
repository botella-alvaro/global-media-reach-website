
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAuditRequestSchema } from "@shared/schema";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the dist/public directory
  app.use(express.static(path.resolve("dist/public")));

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

  // Serve index.html for all other routes (SPA behavior)
  app.get("*", (_, res) => {
    res.sendFile(path.resolve("dist/public/index.html"));
  });

  const httpServer = createServer(app);
  return httpServer;
}

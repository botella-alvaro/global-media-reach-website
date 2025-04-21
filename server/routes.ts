
import express, { Express } from 'express';
import http from 'http';

export async function registerRoutes(app: Express) {
  // Create HTTP server
  const server = http.createServer(app);
  
  // Basic health check route
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return server;
}

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against the schema
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.saveContactMessage(contactData);
      
      // Return success response with the created message
      return res.status(201).json({
        message: "Message received successfully. We'll get back to you soon!",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        message: "Failed to process your message. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { insertContactMessageSchema } from "../shared/schema";
import { createContactMessage } from "../lib/kv"; // Use our new KV function
import { sendContactFormEmail } from "../lib/sendgrid";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const message = await createContactMessage(validatedData);
    await sendContactFormEmail(validatedData); // Keep sending email

    console.log(`Contact form submission received - ID: ${message.id}`);
    return res
      .status(200)
      .json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid form data", errors: error.errors });
    }
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
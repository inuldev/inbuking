import { object, string } from "zod";

export const ContactSchema = object({
  name: string().min(6, "Name at least 6 characters"),
  email: string().email("Invalid email address"),
  subject: string()
    .min(6, "Subject at least 6 characters")
    .max(50, "Subject maximum 50 characters"),
  message: string()
    .min(50, "Message at least 50 characters")
    .max(200, "Message maximum 200 characters"),
});

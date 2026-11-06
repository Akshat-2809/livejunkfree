"use server";

import { z } from "zod";
import { QUOTE_FORM } from "@/content/shared";

const MAX_PHOTOS = 5;
const MAX_TOTAL = 8 * 1024 * 1024;

const QuoteSchema = z.object({
  bookingFor: z.string().trim().max(60).optional(),
  company: z.string().trim().max(120).optional(),
  name: z.string().trim().min(1, "Please add your name.").max(120),
  phone: z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Please add a phone number we can call or text."),
  email: z.union([z.literal(""), z.email("That email doesn't look right.")]).optional(),
  postal: z.string().trim().max(10).optional(),
  day: z.string().trim().max(20).optional(),
  service: z.union([z.literal(""), z.enum(QUOTE_FORM.services as [string, ...string[]])]).optional(),
  details: z.string().trim().max(4000).optional(),
  source: z.string().trim().max(200).optional(),
});

export type QuoteState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string; fields?: Partial<Record<string, string>> };

const str = (fd: FormData, k: string) => {
  const v = fd.get(k);
  return typeof v === "string" ? v : undefined;
};

/**
 * Quote request handler (stub). Validates with zod and logs the request.
 * TODO(pre-launch): route to email and/or CRM (e.g. Resend/SendGrid + the client's CRM),
 * upload photos to storage, and add spam protection (honeypot / Turnstile).
 */
export async function submitQuote(_prev: QuoteState, fd: FormData): Promise<QuoteState> {
  // Honeypot: bots fill every field.
  if (str(fd, "website")) return { status: "ok" };

  const parsed = QuoteSchema.safeParse({
    bookingFor: str(fd, "bookingFor"),
    company: str(fd, "company"),
    name: str(fd, "name"),
    phone: str(fd, "phone"),
    email: str(fd, "email") ?? "",
    postal: str(fd, "postal"),
    day: str(fd, "day"),
    service: str(fd, "service") ?? "",
    details: str(fd, "details"),
    source: str(fd, "source"),
  });

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message;
    return { status: "error", message: "Please check the highlighted fields.", fields };
  }

  const photos = fd.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
  if (photos.length > MAX_PHOTOS) return { status: "error", message: `Please attach up to ${MAX_PHOTOS} photos.` };
  if (photos.some((p) => !p.type.startsWith("image/"))) return { status: "error", message: "Photos must be image files." };
  if (photos.reduce((n, p) => n + p.size, 0) > MAX_TOTAL) return { status: "error", message: "Photos are too large. Please keep them under 8 MB in total." };

  // TODO(pre-launch): send to email/CRM instead of logging.
  console.info("[quote] new request", {
    ...parsed.data,
    photos: photos.map((p) => ({ name: p.name, type: p.type, size: p.size })),
    receivedAt: new Date().toISOString(),
  });

  return { status: "ok" };
}

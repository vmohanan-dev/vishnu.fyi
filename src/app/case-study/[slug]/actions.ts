"use server";

import { cookies } from "next/headers";
import { getCaseStudy } from "@/data/case-studies";

export async function verifyPassword(
  slug: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) {
    return { success: false, error: "Case study not found." };
  }

  const expected = process.env[caseStudy.passwordEnvKey];
  if (!expected) {
    return { success: false, error: "Access not configured." };
  }

  if (password !== expected) {
    return { success: false, error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(`case-study-${slug}-auth`, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: `/case-study/${slug}`,
  });

  return { success: true };
}

export async function checkAuth(slug: string): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(`case-study-${slug}-auth`)?.value === "1";
}

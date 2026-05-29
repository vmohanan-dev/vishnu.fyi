"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { verifyPassword } from "@/app/case-study/[slug]/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export default function CaseStudyGate({ slug }: { slug: string }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await verifyPassword(slug, password);
      if (result.success) {
        router.refresh();
      } else {
        setError(result.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5 mb-6">
          <Lock className="w-4 h-4 text-zinc-400" />
          <p className="text-sm text-zinc-500">This case study is private.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-zinc-300"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button
            type="submit"
            disabled={isPending || !password}
            className="w-full"
          >
            {isPending ? "Checking…" : "View case study"}
          </Button>
        </form>
      </div>
    </div>
  );
}

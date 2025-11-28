'use client';
import Landing from "@/components/Landing";
import useLenis from "@/lib/useLenis";
import Image from "next/image";

export default function Home() {
  useLenis();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Landing/>
    </div>
  );
}

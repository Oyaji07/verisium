// lib/vapi.sdk.ts
import Vapi from "@vapi-ai/web";

let vapi: Vapi | null = null;

if (typeof window !== "undefined") {
  const key = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ?? "";
  if (key) vapi = new Vapi(key);
}

export { vapi };

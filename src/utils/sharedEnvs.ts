import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
});

type envType = z.infer<typeof envSchema>;

export class SharedEnvs {
  private _nextUrl: envType["NEXT_PUBLIC_API_URL"];

  constructor() {
    const env = envSchema.parse({
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_NEXT_URL,
    });
    this._nextUrl = env.NEXT_PUBLIC_API_URL;
  }

  get nextUrl() {
    return this._nextUrl;
  }
}

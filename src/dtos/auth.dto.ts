import { z } from "zod";

export const loginRequestSchema = z.object({
    username: z
        .string({ error: "Username wajib diisi" })
        .min(3, "Username minimal 3 karakter")
        .max(50, "Username maksimal 50 karakter"),
    password: z
        .string({ error: "Password wajib diisi" })
        .min(6, "Password minimal 6 karakter"),
});

export type LoginRequest = z.infer<typeof loginRequestSchema>;

export const loginResponseSchema = z.object({
    token: z.string(),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

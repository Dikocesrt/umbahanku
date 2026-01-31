import { z } from "zod";

// Create user - hanya full_name dan username
export const createUserSchema = z.object({
    full_name: z
        .string({ error: "Nama lengkap wajib diisi" })
        .min(1, "Nama lengkap wajib diisi"),
    username: z
        .string({ error: "Username wajib diisi" })
        .min(1, "Username wajib diisi"),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

// Update user - semua optional, password hanya bisa diisi oleh user yang sama
export const updateUserSchema = z.object({
    full_name: z.string().min(1, "Nama lengkap tidak boleh kosong").optional(),
    username: z.string().min(1, "Username tidak boleh kosong").optional(),
    password: z.string().min(6, "Password minimal 6 karakter").optional(),
    is_active: z.boolean().optional(),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;

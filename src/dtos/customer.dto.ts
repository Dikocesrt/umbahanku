import { z } from "zod";

export const createCustomerSchema = z.object({
    name: z.string({ error: "Nama wajib diisi" }),
    phone: z.string(),
    address: z.string().optional(),
});

export type CreateCustomerSchema = z.infer<typeof createCustomerSchema>;

export const updateCustomerSchema = z.object({
    name: z.string({ error: "Nama wajib diisi" }).optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
});

export type UpdateCustomerSchema = z.infer<typeof updateCustomerSchema>;

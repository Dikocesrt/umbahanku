import { z } from "zod";

export const createCustomerSchema = z.object({
    name: z.string({ error: "Nama wajib diisi" }),
    phone: z.string(),
    address: z.string().optional(),
});

export type CreateCustomerSchema = z.infer<typeof createCustomerSchema>;

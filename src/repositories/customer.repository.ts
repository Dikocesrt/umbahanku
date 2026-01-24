import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function createCustomerRepo(data: Prisma.customersCreateInput) {
    return prisma.customers.create({ data });
}

export async function findCustomerByPhoneRepo(phone: string) {
    return prisma.customers.findUnique({ where: { phone } });
}

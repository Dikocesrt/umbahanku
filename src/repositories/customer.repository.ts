import { customers, Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function createCustomerRepo(
    data: Prisma.customersCreateInput,
): Promise<customers> {
    return prisma.customers.create({ data });
}

export async function findCustomerByPhoneRepo(
    phone: string,
): Promise<customers | null> {
    return prisma.customers.findUnique({ where: { phone } });
}

export async function findCustomerByIdRepo(
    id: string,
): Promise<customers | null> {
    return prisma.customers.findUnique({
        where: { id, deleted_at: null },
    });
}

export async function updateCustomerRepo(
    id: string,
    data: Prisma.customersUpdateInput,
): Promise<customers> {
    return prisma.customers.update({
        where: { id },
        data,
    });
}

export async function findCustomersRepo(
    page: number,
    limit: number,
    search?: string,
    sortBy: string = "created_at",
    sortDir: string = "desc",
): Promise<{ data: customers[]; totalItems: number }> {
    const where: Prisma.customersWhereInput = {
        deleted_at: null,
    };

    if (search) {
        where.OR = [
            { name: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
        ];
    }

    const totalItems = await prisma.customers.count({ where });

    const data = await prisma.customers.findMany({
        where,
        orderBy: { [sortBy]: sortDir },
        skip: (page - 1) * limit,
        take: limit,
    });

    return {
        data,
        totalItems,
    };
}

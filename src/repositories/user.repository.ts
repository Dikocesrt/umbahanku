import { prisma } from "@/lib/prisma";
import { Prisma, users } from "@/generated/prisma/client";

export async function findUserByUsername(
    username: string,
): Promise<users | null> {
    const user = await prisma.users.findFirst({
        where: {
            username: username,
            deleted_at: null,
        },
    });

    return user;
}

export async function findUserById(id: string): Promise<users | null> {
    const user = await prisma.users.findFirst({
        where: {
            id: id,
            deleted_at: null,
        },
    });

    return user;
}

export async function createUserRepo(
    data: Prisma.usersCreateInput,
): Promise<users> {
    return prisma.users.create({ data });
}

export async function updateUserRepo(
    id: string,
    data: Prisma.usersUpdateInput,
): Promise<users> {
    return prisma.users.update({
        where: { id },
        data,
    });
}

export async function findUsersRepo(
    page: number,
    limit: number,
    search?: string,
    sortBy: string = "created_at",
    sortDir: string = "desc",
): Promise<{ data: users[]; totalItems: number }> {
    const where: Prisma.usersWhereInput = {
        deleted_at: null,
    };

    if (search) {
        where.OR = [
            { full_name: { contains: search, mode: "insensitive" } },
            { username: { contains: search, mode: "insensitive" } },
        ];
    }

    const totalItems = await prisma.users.count({ where });

    const data = await prisma.users.findMany({
        where,
        orderBy: { [sortBy]: sortDir },
        skip: (page - 1) * limit,
        take: limit,
        select: {
            id: true,
            full_name: true,
            username: true,
            password: false, // Jangan expose password
            is_active: true,
            role: true,
            created_at: true,
            updated_at: true,
            created_by: true,
            updated_by: true,
            deleted_at: true,
        },
    });

    return {
        data: data as users[],
        totalItems,
    };
}

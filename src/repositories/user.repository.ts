import { prisma } from "@/lib/prisma";
import { users } from "@/generated/prisma/client";

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

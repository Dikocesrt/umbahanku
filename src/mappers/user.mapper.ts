import { Prisma } from "@/generated/prisma/client";
import { CreateUserSchema, UpdateUserSchema } from "@/dtos/user.dto";
import { uuidv7 } from "uuidv7";
import { USER_ROLES_ADMIN } from "@/constant/constant";

export function toUserCreateInput(
    request: CreateUserSchema,
    hashedPassword: string,
    createdBy: string,
): Prisma.usersCreateInput {
    return {
        id: uuidv7(),
        full_name: request.full_name,
        username: request.username,
        password: hashedPassword,
        is_active: true,
        role: USER_ROLES_ADMIN,
        created_at: new Date(),
        users_users_created_byTousers: {
            connect: {
                id: createdBy,
            },
        },
    };
}

export function toUserUpdateInput(
    request: UpdateUserSchema,
    updatedBy: string,
    hashedPassword?: string,
): Prisma.usersUpdateInput {
    return {
        ...(request.full_name && { full_name: request.full_name }),
        ...(request.username && { username: request.username }),
        ...(hashedPassword && { password: hashedPassword }),
        ...(request.is_active !== undefined && {
            is_active: request.is_active,
        }),
        updated_at: new Date(),
        users_users_updated_byTousers: {
            connect: {
                id: updatedBy,
            },
        },
    };
}

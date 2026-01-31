import { USER_ROLES_ADMIN, USER_ROLES_SUPERADMIN } from "@/constant/constant";
import {
    ConflictError,
    ForbiddenError,
    NotFoundError,
    ValidationError,
} from "@/errors";
import { requireAuth } from "@/lib/auth";
import { hashPassword } from "@/lib/password";
import { toUserCreateInput, toUserUpdateInput } from "@/mappers/user.mapper";
import {
    createUserRepo,
    findUserById,
    findUserByUsername,
    findUsersRepo,
    updateUserRepo,
} from "@/repositories/user.repository";
import { createUserSchema, updateUserSchema } from "@/dtos/user.dto";
import {
    createPaginationMeta,
    PaginatedSuccessResponse,
    PaginationQuery,
} from "@/dtos/response.dto";
import { users } from "@/generated/prisma/client";

export async function createUserService(
    body: unknown,
    token: string,
): Promise<void> {
    const user = requireAuth(token);

    const parsed = createUserSchema.safeParse(body);
    if (!parsed.success) {
        throw new ValidationError(
            parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        );
    }

    const checkUserLoggedIn = await findUserById(user.userId);
    if (!checkUserLoggedIn) {
        throw new NotFoundError("User tidak ditemukan");
    }

    if (!checkUserLoggedIn.is_active) {
        throw new ForbiddenError("User tidak aktif");
    }

    if (
        checkUserLoggedIn.role.toLowerCase() !==
            USER_ROLES_SUPERADMIN.toLowerCase() &&
        checkUserLoggedIn.role.toLowerCase() !== USER_ROLES_ADMIN.toLowerCase()
    ) {
        throw new ForbiddenError("User tidak memiliki akses");
    }

    const existingUser = await findUserByUsername(parsed.data.username);
    if (existingUser) {
        throw new ConflictError("Username sudah terdaftar");
    }

    const defaultPassword = process.env.DEFAULT_PASSWORD;
    if (!defaultPassword) {
        throw new Error("DEFAULT_PASSWORD belum di-set di environment");
    }

    const hashedPassword = await hashPassword(defaultPassword);

    const input = toUserCreateInput(parsed.data, hashedPassword, user.userId);

    await createUserRepo(input);
}

export async function updateUserService(
    id: string,
    body: unknown,
    token: string,
): Promise<void> {
    const user = requireAuth(token);

    const parsed = updateUserSchema.safeParse(body);
    if (!parsed.success) {
        throw new ValidationError(
            parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        );
    }

    const checkUserLoggedIn = await findUserById(user.userId);
    if (!checkUserLoggedIn) {
        throw new NotFoundError("User tidak ditemukan");
    }

    if (!checkUserLoggedIn.is_active) {
        throw new ForbiddenError("User tidak aktif");
    }

    const targetUser = await findUserById(id);
    if (!targetUser) {
        throw new NotFoundError("User yang akan diupdate tidak ditemukan");
    }

    if (parsed.data.password && user.userId !== id) {
        throw new ForbiddenError(
            "Password hanya dapat diubah oleh user yang bersangkutan",
        );
    }

    if (user.userId !== id) {
        if (
            checkUserLoggedIn.role.toLowerCase() !==
                USER_ROLES_SUPERADMIN.toLowerCase() &&
            checkUserLoggedIn.role.toLowerCase() !==
                USER_ROLES_ADMIN.toLowerCase()
        ) {
            throw new ForbiddenError("User tidak memiliki akses");
        }
    }

    if (parsed.data.username && parsed.data.username !== targetUser.username) {
        const userWithUsername = await findUserByUsername(parsed.data.username);
        if (userWithUsername) {
            throw new ConflictError("Username sudah digunakan");
        }
    }

    let hashedPassword: string | undefined;
    if (parsed.data.password) {
        hashedPassword = await hashPassword(parsed.data.password);
    }

    const input = toUserUpdateInput(parsed.data, user.userId, hashedPassword);

    await updateUserRepo(id, input);
}

export async function getUsersService(
    token: string,
    query: PaginationQuery,
): Promise<PaginatedSuccessResponse<users>> {
    const user = requireAuth(token);

    const checkUserLoggedIn = await findUserById(user.userId);
    if (!checkUserLoggedIn) {
        throw new NotFoundError("User tidak ditemukan");
    }

    if (!checkUserLoggedIn.is_active) {
        throw new ForbiddenError("User tidak aktif");
    }

    if (
        checkUserLoggedIn.role.toLowerCase() !==
            USER_ROLES_SUPERADMIN.toLowerCase() &&
        checkUserLoggedIn.role.toLowerCase() !== USER_ROLES_ADMIN.toLowerCase()
    ) {
        throw new ForbiddenError("User tidak memiliki akses");
    }

    const { data: users, totalItems } = await findUsersRepo(
        query.page,
        query.limit,
        query.search,
        query.sortBy,
        query.sortDir,
    );

    return {
        success: true,
        message: "Users berhasil diambil",
        data: users,
        meta: createPaginationMeta(query.page, query.limit, totalItems),
    };
}

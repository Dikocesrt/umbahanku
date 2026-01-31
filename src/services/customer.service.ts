import { USER_ROLES_ADMIN, USER_ROLES_SUPERADMIN } from "@/constant/constant";
import {
    ConflictError,
    ForbiddenError,
    NotFoundError,
    ValidationError,
} from "@/errors";
import { requireAuth } from "@/lib/auth";
import {
    toCustomerCreateInput,
    toCustomerUpdateInput,
} from "@/mappers/customer.mapper";
import {
    createCustomerRepo,
    findCustomerByIdRepo,
    findCustomerByPhoneRepo,
    findCustomersRepo,
    updateCustomerRepo,
} from "@/repositories/customer.repository";
import { findUserById } from "@/repositories/user.repository";
import {
    createCustomerSchema,
    updateCustomerSchema,
} from "@/dtos/customer.dto";
import {
    createPaginationMeta,
    PaginatedSuccessResponse,
    PaginationQuery,
} from "@/dtos/response.dto";
import { customers } from "@/generated/prisma/client";

export async function createCustomerService(
    body: unknown,
    token: string,
): Promise<void> {
    const user = requireAuth(token);

    const parsed = createCustomerSchema.safeParse(body);
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

    const checkCustomerByPhone = await findCustomerByPhoneRepo(
        parsed.data.phone,
    );
    if (checkCustomerByPhone) {
        throw new ConflictError(
            "Customer dengan nomor telepon ini sudah terdaftar",
        );
    }

    const input = toCustomerCreateInput(parsed.data, user.userId);

    await createCustomerRepo(input);
}

export async function updateCustomerService(
    id: string,
    body: unknown,
    token: string,
): Promise<void> {
    const user = requireAuth(token);

    const parsed = updateCustomerSchema.safeParse(body);
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

    // Check if customer exists
    const existingCustomer = await findCustomerByIdRepo(id);
    if (!existingCustomer) {
        throw new NotFoundError("Customer tidak ditemukan");
    }

    // Check if phone already used by another customer
    if (parsed.data.phone && parsed.data.phone !== existingCustomer.phone) {
        const customerWithPhone = await findCustomerByPhoneRepo(
            parsed.data.phone,
        );
        if (customerWithPhone) {
            throw new ConflictError(
                "Customer dengan nomor telepon ini sudah terdaftar",
            );
        }
    }

    const input = toCustomerUpdateInput(parsed.data, user.userId);

    await updateCustomerRepo(id, input);
}

export async function getCustomersService(
    token: string,
    query: PaginationQuery,
): Promise<PaginatedSuccessResponse<customers>> {
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

    const { data: customers, totalItems } = await findCustomersRepo(
        query.page,
        query.limit,
        query.search,
        query.sortBy,
        query.sortDir,
    );

    return {
        success: true,
        message: "Customers berhasil diambil",
        data: customers,
        meta: createPaginationMeta(query.page, query.limit, totalItems),
    };
}

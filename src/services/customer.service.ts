import { USER_ROLES_ADMIN, USER_ROLES_SUPERADMIN } from "@/constant/constant";
import {
    ConflictError,
    ForbiddenError,
    NotFoundError,
    ValidationError,
} from "@/errors";
import { JwtPayload } from "@/lib/jwt";
import { toCustomerCreateInput } from "@/mappers/customer.mapper";
import {
    createCustomerRepo,
    findCustomerByPhoneRepo,
} from "@/repositories/customer.repository";
import { findUserById } from "@/repositories/user.repository";
import { createCustomerSchema } from "@/dtos/customer.dto";

export async function createCustomerService(body: unknown, user: JwtPayload) {
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

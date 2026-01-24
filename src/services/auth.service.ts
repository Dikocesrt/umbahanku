import { findUserByUsername } from "@/repositories/user.repository";
import { verifyPassword } from "@/lib/password";
import { generateToken } from "@/lib/jwt";
import { loginRequestSchema, LoginResponse } from "@/dtos/auth.dto";
import { ValidationError } from "@/errors";

export class AuthError extends Error {
    constructor(
        message: string,
        public statusCode: number = 401,
    ) {
        super(message);
        this.name = "AuthError";
    }
}

export async function login(request: unknown): Promise<LoginResponse> {
    const parsed = loginRequestSchema.safeParse(request);
    if (!parsed.success) {
        throw new ValidationError(
            parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        );
    }

    const user = await findUserByUsername(parsed.data.username);
    if (!user) {
        throw new AuthError("Username atau password salah");
    }

    const isPasswordValid = await verifyPassword(
        parsed.data.password,
        user.password,
    );

    if (!isPasswordValid) {
        throw new AuthError("Username atau password salah");
    }

    if (!user.is_active) {
        throw new AuthError("Akun tidak aktif. Silakan hubungi admin.", 403);
    }

    const token = generateToken({
        userId: user.id,
        username: user.username,
        role: user.role,
    });

    return { token };
}

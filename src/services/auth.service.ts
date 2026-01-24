import { findUserByUsername } from "@/repositories/user.repository";
import { verifyPassword } from "@/lib/password";
import { generateToken } from "@/lib/jwt";
import { LoginRequest, LoginResponse } from "@/schemas/auth.schema";

export class AuthError extends Error {
    constructor(
        message: string,
        public statusCode: number = 401,
    ) {
        super(message);
        this.name = "AuthError";
    }
}

export async function login(request: LoginRequest): Promise<LoginResponse> {
    // 1. Find user by username
    const user = await findUserByUsername(request.username);

    if (!user) {
        throw new AuthError("Username atau password salah");
    }

    // 2. Verify password
    const isPasswordValid = await verifyPassword(
        request.password,
        user.password,
    );

    if (!isPasswordValid) {
        throw new AuthError("Username atau password salah");
    }

    // 3. Check if user is active
    if (!user.is_active) {
        throw new AuthError("Akun tidak aktif. Silakan hubungi admin.", 403);
    }

    // 4. Generate JWT token
    const token = generateToken({
        userId: user.id,
        username: user.username,
        role: user.role,
    });

    // 5. Return response (hanya token sesuai schema kamu)
    return { token };
}

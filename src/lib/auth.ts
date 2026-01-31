import { NextRequest } from "next/server";
import { JwtPayload, verifyToken } from "@/lib/jwt";
import { UnauthorizedError } from "@/errors";

export function getToken(request: NextRequest): string {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthorizedError();
    }

    const token = authHeader.replace("Bearer ", "");
    return token;
}

export function requireAuth(token: string): JwtPayload {
    const user = verifyToken(token);

    if (!user) {
        throw new UnauthorizedError();
    }

    return user;
}

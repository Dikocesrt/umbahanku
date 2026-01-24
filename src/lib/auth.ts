import { NextRequest } from "next/server";
import { verifyToken, JwtPayload } from "@/lib/jwt";
import { UnauthorizedError } from "@/errors";

export function getAuthUser(request: NextRequest): JwtPayload | null {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }

    const token = authHeader.replace("Bearer ", "");
    return verifyToken(token);
}

export function requireAuth(request: NextRequest): JwtPayload {
    const user = getAuthUser(request);

    if (!user) {
        throw new UnauthorizedError();
    }

    return user;
}

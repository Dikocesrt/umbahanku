import { NextRequest } from "next/server";
import { login } from "@/services/auth.service";
import { successResponse, errorResponse } from "@/dtos/response.dto";
import { HttpError } from "@/errors";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const result = await login(body);

        return successResponse(result, "Login berhasil");
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Login error:", error);
        return errorResponse("Internal server error", 500);
    }
}

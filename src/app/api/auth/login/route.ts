// src/app/api/auth/login/route.ts

import { NextRequest } from "next/server";
import { loginRequestSchema } from "@/schemas/auth.schema";
import { login, AuthError } from "@/services/auth.service";
import {
    successResponse,
    errorResponse,
    validationErrorResponse,
    internalErrorResponse,
} from "@/lib/response";

export async function POST(request: NextRequest) {
    try {
        // 1. Parse request body
        const body = await request.json();

        // 2. Validate dengan Zod schema
        const parsed = loginRequestSchema.safeParse(body);
        if (!parsed.success) {
            const errors = parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            }));
            return validationErrorResponse(errors);
        }

        // 3. Call service layer
        const result = await login(parsed.data);

        // 4. Return success response
        return successResponse(result, "Login berhasil");
    } catch (error) {
        // AuthError - credentials invalid atau user inactive
        if (error instanceof AuthError) {
            return errorResponse(error.message, error.statusCode);
        }

        // Unexpected error
        console.error("Login error:", error);
        return internalErrorResponse();
    }
}

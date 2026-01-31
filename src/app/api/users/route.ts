import { HttpError } from "@/errors";
import { getToken } from "@/lib/auth";
import { errorResponse, successResponse } from "@/dtos/response.dto";
import { createUserService } from "@/services/user.service";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const token = getToken(request);
        const body = await request.json();

        await createUserService(body, token);

        return successResponse(null, "User berhasil dibuat", 201);
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Error:", error);
        return errorResponse("Terjadi kesalahan pada server", 500);
    }
}

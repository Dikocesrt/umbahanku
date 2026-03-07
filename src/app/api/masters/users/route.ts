import { HttpError } from "@/errors";
import { getToken } from "@/lib/auth";
import {
    errorResponse,
    paginatedResponse,
    parsePaginationQuery,
    successResponse,
} from "@/dtos/response.dto";
import { createUserService, getUsersService } from "@/services/user.service";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const token = getToken(request);

        const query = parsePaginationQuery(request.nextUrl.searchParams);

        const result = await getUsersService(token, query);

        return paginatedResponse(result.data, result.meta, result.message);
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Error:", error);
        return errorResponse("Internal server error", 500);
    }
}

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
        return errorResponse("Internal server error", 500);
    }
}

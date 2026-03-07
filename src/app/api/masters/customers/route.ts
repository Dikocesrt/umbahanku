import { HttpError } from "@/errors";
import { getToken } from "@/lib/auth";
import {
    errorResponse,
    paginatedResponse,
    parsePaginationQuery,
    successResponse,
} from "@/dtos/response.dto";
import {
    createCustomerService,
    getCustomersService,
} from "@/services/customer.service";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const token = getToken(request);

        const query = parsePaginationQuery(request.nextUrl.searchParams);

        const result = await getCustomersService(token, query);

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

        await createCustomerService(body, token);

        return successResponse(null, "Customer berhasil dibuat", 201);
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Error:", error);
        return errorResponse("Internal server error", 500);
    }
}

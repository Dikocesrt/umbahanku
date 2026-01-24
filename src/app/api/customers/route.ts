import { HttpError } from "@/errors";
import { requireAuth } from "@/lib/auth";
import { errorResponse, successResponse } from "@/lib/response";
import { createCustomerService } from "@/services/customer.service";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const user = requireAuth(request);

        const body = await request.json();

        await createCustomerService(body, user);

        return successResponse(null, "Customer berhasil dibuat", 201);
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Error:", error);
        return errorResponse("Internal server error", 500);
    }
}

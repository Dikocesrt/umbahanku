import { HttpError } from "@/errors";
import { getToken } from "@/lib/auth";
import { errorResponse, successResponse } from "@/dtos/response.dto";
import { updateCustomerService } from "@/services/customer.service";
import { NextRequest } from "next/server";

type Params = {
    params: Promise<{ id: string }>;
};

export async function PUT(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params;
        const token = getToken(request);
        const body = await request.json();

        await updateCustomerService(id, body, token);

        return successResponse(null, "Customer berhasil diupdate");
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Error:", error);
        return errorResponse("Terjadi kesalahan pada server", 500);
    }
}

import { HttpError } from "@/errors";
import { getToken } from "@/lib/auth";
import { errorResponse, successResponse } from "@/dtos/response.dto";
import { updateUserService } from "@/services/user.service";
import { NextRequest } from "next/server";

type Params = {
    params: Promise<{ id: string }>;
};

export async function PUT(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params;
        const token = getToken(request);
        const body = await request.json();

        await updateUserService(id, body, token);

        return successResponse(null, "User berhasil diupdate");
    } catch (error) {
        if (error instanceof HttpError) {
            return errorResponse(error.message, error.statusCode);
        }

        console.error("Error:", error);
        return errorResponse("Terjadi kesalahan pada server", 500);
    }
}

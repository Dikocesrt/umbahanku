import { NextResponse } from "next/server";

// Type untuk validation error
export type ValidationError = {
    field: string;
    message: string;
};

// Type untuk success response
export type SuccessResponse<T> = {
    success: true;
    message: string;
    data: T;
};

// Type untuk error response
export type ErrorResponse = {
    success: false;
    message: string;
    errors?: ValidationError[];
};

export function successResponse<T>(
    data: T,
    message: string = "Success",
    status: number = 200,
) {
    return NextResponse.json(
        {
            success: true,
            message,
            data,
        } as SuccessResponse<T>,
        { status },
    );
}

export function errorResponse(
    message: string,
    status: number = 400,
    errors?: ValidationError[],
) {
    const response: ErrorResponse = {
        success: false,
        message,
    };

    if (errors && errors.length > 0) {
        response.errors = errors;
    }

    return NextResponse.json(response, { status });
}

export function validationErrorResponse(errors: ValidationError[]) {
    return errorResponse("Validasi gagal", 400, errors);
}

export function internalErrorResponse(
    message: string = "Terjadi kesalahan pada server",
) {
    return errorResponse(message, 500);
}

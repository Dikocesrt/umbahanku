import { NextResponse } from "next/server";
import { z } from "zod";

// ============================================
// PAGINATION QUERY
// ============================================

export const paginationQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(10),
    search: z.string().optional(),
    sortBy: z.string().optional(),
    sortDir: z.enum(["asc", "desc"]).default("desc"),
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;

export type PaginationMeta = {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
};

// ============================================
// RESPONSE TYPES
// ============================================

export type ValidationError = {
    field: string;
    message: string;
};

export type SuccessResponse<T> = {
    success: true;
    message: string;
    data: T;
};

export type PaginatedSuccessResponse<T> = {
    success: true;
    message: string;
    data: T[];
    meta: PaginationMeta;
};

export type ErrorResponse = {
    success: false;
    message: string;
    errors?: ValidationError[];
};

// ============================================
// RESPONSE HELPER FUNCTIONS
// ============================================

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

export function paginatedResponse<T>(
    data: T[],
    meta: PaginationMeta,
    message: string = "Success",
    status: number = 200,
) {
    return NextResponse.json(
        {
            success: true,
            message,
            data,
            meta,
        } as PaginatedSuccessResponse<T>,
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

// ============================================
// PAGINATION HELPER FUNCTIONS
// ============================================

export function createPaginationMeta(
    page: number,
    limit: number,
    totalItems: number,
): PaginationMeta {
    return {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
    };
}

export function parsePaginationQuery(
    searchParams: URLSearchParams,
): PaginationQuery {
    const rawParams = {
        page: searchParams.get("page") ?? undefined,
        limit: searchParams.get("limit") ?? undefined,
        search: searchParams.get("search") ?? undefined,
        sortBy: searchParams.get("sortBy") ?? undefined,
        sortDir: searchParams.get("sortDir") ?? undefined,
    };

    const parsed = paginationQuerySchema.safeParse(rawParams);

    if (!parsed.success) {
        return {
            page: 1,
            limit: 10,
            sortDir: "desc",
        };
    }

    return parsed.data;
}

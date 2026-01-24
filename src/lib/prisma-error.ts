import { Prisma } from "@/generated/prisma/client";
import { ConflictError, NotFoundError, ValidationError } from "@/errors";

export function handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case "P2002": {
                const field =
                    (error.meta?.target as string[])?.join(", ") || "data";
                throw new ConflictError(`${field} sudah terdaftar`);
            }
            case "P2003": {
                throw new ValidationError([
                    {
                        field: "reference",
                        message: "Data referensi tidak valid",
                    },
                ]);
            }
            case "P2025": {
                throw new NotFoundError("Data tidak ditemukan");
            }
        }
    }

    throw error;
}

export async function withPrismaError<T>(
    operation: () => Promise<T>,
): Promise<T> {
    try {
        return await operation();
    } catch (error) {
        handlePrismaError(error);
    }
}

import { Prisma } from "@/generated/prisma/client";
import { CreateCustomerSchema } from "@/dtos/customer.dto";
import { uuidv7 } from "uuidv7";

export function toCustomerCreateInput(
    request: CreateCustomerSchema,
    createdBy: string,
): Prisma.customersCreateInput {
    return {
        id: uuidv7(),
        name: request.name,
        phone: request.phone,
        address: request.address ?? "",
        created_at: new Date(),
        users_customers_created_byTousers: {
            connect: {
                id: createdBy,
            },
        },
    };
}

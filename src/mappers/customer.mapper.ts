import { Prisma } from "@/generated/prisma/client";
import {
    CreateCustomerSchema,
    UpdateCustomerSchema,
} from "@/dtos/customer.dto";
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

export function toCustomerUpdateInput(
    request: UpdateCustomerSchema,
    updatedBy: string,
): Prisma.customersUpdateInput {
    return {
        ...(request.name && { name: request.name }),
        ...(request.phone && { phone: request.phone }),
        ...(request.address !== undefined && { address: request.address }),
        updated_at: new Date(),
        users_customers_updated_byTousers: {
            connect: {
                id: updatedBy,
            },
        },
    };
}

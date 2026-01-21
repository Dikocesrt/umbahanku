export type Order = {
    id: string;
    customer_id: string;
    payment_method_id: string | null;
    total_price: number;
    is_paid: boolean;
    deadline: Date;
    status: string;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string | null;
    deleted_at: Date | null;
};

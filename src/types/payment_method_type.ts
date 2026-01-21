export type PaymentMethod = {
    id: string;
    name: string;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string | null;
    deleted_at: Date | null;
};

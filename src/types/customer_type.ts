export type Customer = {
    id: string;
    name: string;
    phone: string;
    address: string | null;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string | null;
    deleted_at: Date | null;
};

export type Service = {
    id: string;
    name: string;
    unit_type: string;
    price_per_gram: number | null;
    price_per_unit: number;
    duration: string;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string | null;
    deleted_at: Date | null;
};

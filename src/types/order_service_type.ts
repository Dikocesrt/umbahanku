export type OrderService = {
    id: string;
    service_id: string;
    order_id: string;
    unit_type: string;
    quantity_in_unit: number;
    price: number;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string | null;
    deleted_at: Date | null;
};

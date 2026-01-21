export type Notification = {
    id: string;
    title: string;
    content: string;
    order_id: string | null;
    created_at: Date | null;
    deleted_at: Date | null;
};

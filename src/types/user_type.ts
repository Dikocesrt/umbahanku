export type User = {
    id: string;
    full_name: string;
    username: string;
    password: string;
    is_active: boolean;
    role: string;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string | null;
    deleted_at: Date | null;
};

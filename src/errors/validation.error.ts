import { HttpError } from "./http.error";

export type FieldError = {
    field: string;
    message: string;
};

export class ValidationError extends HttpError {
    constructor(
        public errors: FieldError[] = [],
        message: string = "Validation failed",
    ) {
        super(message, 400);
        this.name = "ValidationError";
    }
}

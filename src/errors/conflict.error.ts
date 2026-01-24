import { HttpError } from "./http.error";

export class ConflictError extends HttpError {
    constructor(message: string = "Data sudah terdaftar") {
        super(message, 409);
        this.name = "ConflictError";
    }
}

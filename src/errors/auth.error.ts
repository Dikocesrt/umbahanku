import { HttpError } from "./http.error";

export class UnauthorizedError extends HttpError {
    constructor(message: string = "Authentication required") {
        super(message, 401);
        this.name = "UnauthorizedError";
    }
}

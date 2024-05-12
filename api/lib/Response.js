class Response {
    constructor() { }

    static successResponse(data, code) {
        return {
            data,
            code
        }
    }
    static errorResponse(data) {
        return {
            code,
            error: {
                message: error.message,
                description: error.description
            }
        }
    }
}
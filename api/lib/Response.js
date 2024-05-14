const Enum = require("../config/Enum");
const CustomError = require("./Error");

class Response {
  constructor() {}

  static successResponse(data, code) {
    return {
      data,
      code,
    };
  }
  
  static errorResponse(data) {
    if (error instanceof CustomError) {
      return {
        code: error.code,
        error: {
          message: error.message,
          description: error.description,
        },
      };
    }
    return {
      code: Enum.HTTP_CODES.INT_SERVER_ERROR,
      error: {
        message: "Unknown Error!",
        description: error.message,
      },
    };
  }
}

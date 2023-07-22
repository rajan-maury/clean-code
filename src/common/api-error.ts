class ErrorClass {
  status: number;
  message: string;
  name: string;

  constructor(status: number, message: string, name: string) {
    this.status = status;
    this.message = message;
    this.name = name;
  }
}

class ApiError extends ErrorClass {
  success: boolean;

  constructor(status: number, message: string, name: string = "ApiError") {
    super(status, message, name);
    this.success = false;
  }
}

export default ApiError;

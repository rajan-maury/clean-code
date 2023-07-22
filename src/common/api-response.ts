class ApiResponse<T> {
  statusCode: number;
  message: string;
  success: boolean;
  data: T | null;

  constructor(statusCode: number, message: string, data: T | null = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode >= 200 && statusCode < 300;
    this.data = data;
  }

  toJson():{ status: number; message: string; success: boolean; data?: T } {
    const json: { status: number; message: string; success: boolean; data?: T } = {
      status: this.statusCode,
      message: this.message,
      success: this.success,
    };

    if (this.data !== null) {
      json.data = this.data;
    }

    return json;
  }
}

export default ApiResponse;


interface ExecutionContext {
  switchToHttp(): ExecutionContext;
  getResponse(): ExecutionContext;
  headersSent: boolean;
}

export const myclass = {
  intercept(context: ExecutionContext) {
    const response = context.switchToHttp().getResponse();

    if (response.headersSent) {
      return true;
    }

    return false;
  },
};

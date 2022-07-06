import express from 'express';

export function errorHandler() {
  return (error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if ((error as any).type === 'entity.too.large') {
      error = new Error(error.message);
    }

    if (!res.headersSent) {
      res.status(500).json({ success: false, errorCode: 'sys_entity_too_large' });
    }
    next();
  };
}

import * as Services from './services';
import type { Request, Response } from 'express';

export async function GetCountriesList(req: Request, res: Response): Promise<void> {
  const response = await Services.GetCountriesList();
  res.status(response.code).json({
    status: response.status,
    message: response.message,
    count: response.count,
    data: response.data,
  });
}

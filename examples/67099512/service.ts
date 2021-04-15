import db from './db';

interface DBGenericDataResponse {
  code: number;
  status: string;
  message: string;
  count: number;
  data: any[];
  error: string;
}

export async function GetAnimalsList(): Promise<DBGenericDataResponse> {
  const lQuery = `select animalid, description from animal where active=1 order by sortorder, description`;
  const responseMessage: DBGenericDataResponse = {
    code: 200,
    status: 'ok',
    message: '',
    count: 0,
    data: [],
    error: '',
  };
  try {
    const dbResult = await db.query<any>(lQuery);
    responseMessage.message = 'Animals Returned';
    responseMessage.count = dbResult.rows.length;
    responseMessage.data = dbResult.rows;
  } catch (err) {
    responseMessage.code = 400;
    responseMessage.status = 'error';
    responseMessage.message = 'Error retrieving Animals List';
    responseMessage.error = err;
  }
  return responseMessage;
}

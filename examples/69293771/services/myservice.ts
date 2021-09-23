import { ServiceResponse } from './serviceResponse';

const cannedServiceResponse: ServiceResponse[] = [
  { label: 'label1', id: 'id1' },
  { label: 'label2', id: 'id2' },
];

async function GetServiceData(): Promise<ServiceResponse[] | Error> {
  return cannedServiceResponse;
}

export default { GetServiceData };

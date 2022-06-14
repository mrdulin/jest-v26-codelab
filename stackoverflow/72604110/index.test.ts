import { Client } from 'soap';
import * as soap from 'soap';
import { SoapHelper } from '.';

describe('**** Register via soap service ****', () => {
  it('** should excecute register method **', async () => {
    const request = {};
    const mClient = ({
      RegisterExperimentAsync: jest.fn().mockResolvedValueOnce({ Result: 'mock result' }),
    } as unknown) as Client;
    jest.spyOn(soap, 'createClientAsync').mockResolvedValue(mClient);
    const soapHelper = new SoapHelper();
    const result = await soapHelper.registerInSoap(request);
    expect(result).toEqual({Result: 'mock result'});
  });
});

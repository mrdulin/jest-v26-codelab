import * as soap from 'soap';

interface ImportExperimentRequestDto {}
interface IffManPublishResponseDto {}

export class SoapHelper {
  public async registerInSoap(
    uploadRequest: ImportExperimentRequestDto,
  ): Promise<{ RegisterExperimentResult: IffManPublishResponseDto }> {
    const url = 'http://test.com/Services/Req.svc?wsdl';
    const client = await soap.createClientAsync(url);
    return client.RegisterExperimentAsync({ upload: uploadRequest });
  }
}

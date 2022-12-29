import * as exampleModule from './someplace';
import { processRequest } from './processRequest';
import type { Response, Request } from 'express';
import sinon from 'sinon';

describe('example test', () => {
  it('example test', async () => {
    const exampleStub = sinon.stub(exampleModule, 'example').resolves('test data');
    const mockRequest = {
      body: { someData: 'a' },
    };
    const mockResponse = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub(),
    };

    const mockNext = sinon.stub();
    await processRequest((mockRequest as unknown) as Request, (mockResponse as unknown) as Response, mockNext);
    sinon.assert.calledWithExactly(exampleStub, 'a');
    sinon.assert.calledWithExactly(mockResponse.status, 200);
    sinon.assert.calledOnce(mockResponse.send);
  });
});

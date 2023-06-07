import OktaJwtVerifier from '@okta/jwt-verifier';
import { verifyAccessToken } from './main';
import { mocked } from 'ts-jest';

jest.mock("@okta/jwt-verifier");

const OktaJwtVerifierMock = mocked(OktaJwtVerifier)

const oktaJwtVerifierInstance = mocked(OktaJwtVerifierMock.mock.instances[0]);

describe('76422353', () => {
    test('should pass 1', async () => {
        oktaJwtVerifierInstance.verifyAccessToken.mockResolvedValueOnce('a' as any);
        const actual = await verifyAccessToken('1');
        expect(actual).toBe('a');
    });

    test('should pass 2', async () => {
        oktaJwtVerifierInstance.verifyAccessToken.mockResolvedValueOnce('b' as any);
        const actual = await verifyAccessToken('2');
        expect(actual).toBe('b');
    });
});
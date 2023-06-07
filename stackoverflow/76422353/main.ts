import OktaJwtVerifier from '@okta/jwt-verifier';

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: "issuer domain",
});

export const verifyAccessToken = async (token: string) =>
    oktaJwtVerifier.verifyAccessToken(token, "audience");
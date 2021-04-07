import jwt from 'jsonwebtoken';

export async function decode(token, getPublicKey) {
  try {
    const decodedJwt = new Promise((resolve, reject) => {
      jwt.verify(
        token,
        getPublicKey,

        {
          algorithms: ['RS256'],
          ignoreExpiration: false,
        },
        (decodeError, decodedValue) => {
          if (decodeError) {
            reject(decodeError);
          }
          resolve(decodedValue);
        }
      );
    });

    return await decodedJwt;
  } catch (error) {
    console.error(error);
    return null;
  }
}

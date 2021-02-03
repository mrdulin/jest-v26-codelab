import fetch from 'isomorphic-unfetch';

export const refreshAccessToken = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_HTTPS_URL}/refreshToken`, {
      method: 'POST',
      credentials: 'include',
    });
    const data = await response.json();
    const accessToken = data.accessToken;
    console.log(accessToken);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

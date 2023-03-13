import getData from './getData';

const getRedirectUrl = async (requestUrl: string) => {
  if (requestUrl.includes('/foo/')) {
    const { content } = await getData(requestUrl);
    if (content.type === 'MyPage') {
      return `/my-page/?id=${content.id}`;
    }
  }
  return null;
};

export default getRedirectUrl;

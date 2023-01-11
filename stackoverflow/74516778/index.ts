import * as sm from './some-client';
const smCli: sm.Client = new sm.Client();

export const getKey = async () => {
  const smCreds = await sm.getCreds();
  await smCli.login(smCreds);
};

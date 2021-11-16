import SM from 'aws-sdk/clients/secretsmanager';
const secretManagerClient = new SM();

export const randomMethod = async () => {
  const personalToken = {
    SecretId: process.env.secretId || '',
  };
  try {
    const data = await secretManagerClient.getSecretValue(personalToken).promise();
    return data.SecretString;
  } catch (err) {
    console.error(`[SECRETS MANAGER] Error fetching personal token : ${err}`);
  }
};

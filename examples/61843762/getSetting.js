import settings from './settings';

export const getSetting = (platform) => {
  return settings[platform];
};

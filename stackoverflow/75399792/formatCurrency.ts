const languageCurrency = {
  'en-GB': 'GBP',
  'en-US': 'USD',
};

const userLanguage = window.navigator.language;

export const formatCurrency = (value) => {
  console.debug('languageCurrency[userLanguage]: %s userLanguage: %s', languageCurrency[userLanguage], userLanguage);
  return Intl.NumberFormat(userLanguage, {
    style: 'currency',
    currency: languageCurrency[userLanguage],
  }).format(value);
};

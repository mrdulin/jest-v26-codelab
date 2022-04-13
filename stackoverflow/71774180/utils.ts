import { t } from 'i18next';

export const changeDocumentTitle = (titleKey: string): void => {
  document.title = t(`${titleKey}`);
};

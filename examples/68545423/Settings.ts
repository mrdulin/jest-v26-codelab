export interface ISettings {
  getSetting(key: string): void;
}

export class Settings implements ISettings {
  getSetting(key: string) {
    return 'real implementation';
  }
}

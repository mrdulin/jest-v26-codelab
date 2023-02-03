type CookieSetOptions = any;

export class CookiesManager {
  static get(key: string) {}

  static set(key: string, value: any, config?: CookieSetOptions) {}

  static remove(key: string) {}
}

export const a = () => 'a'
export const b = () => 'b'

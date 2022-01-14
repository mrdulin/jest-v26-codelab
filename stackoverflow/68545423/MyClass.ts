//@ts-ignore
import { ExternalObject } from 'external-library';
import { ISettings } from './Settings';

export class MyClass {
  public createInstance(settings: ISettings): ExternalObject {
    const setting1 = settings.getSetting('setting1');
    const setting2 = settings.getSetting('setting2');
    return new ExternalObject(setting1, setting2);
  }
}

import { uuid } from 'uuidv4';

interface IUser {
  id?: string;
}

export class User implements IUser {
  constructor(public name: string, public email: string, public password: string, public id?: string) {
    this.id = id ? id : uuid();
  }
}

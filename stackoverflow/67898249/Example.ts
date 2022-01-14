import { nanoid } from 'nanoid';

export interface ApplicationDto {}

export class Example {
  constructor(private applicationModel) {}

  public async createApp(appDto: ApplicationDto): Promise<string> {
    const appWithToken = { ...appDto, accessToken: nanoid() };
    const application = await this.applicationModel.create(appWithToken);

    return application.id;
  }
}

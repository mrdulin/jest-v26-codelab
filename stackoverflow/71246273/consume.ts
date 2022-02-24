import { Consumer } from './lib';
import { RandomService } from './random.service';

export class Consume {
  private readonly consumer: Consumer;
  private readonly randomService: RandomService;

  constructor() {
    this.consumer = new Consumer();
    this.randomService = new RandomService();
  }

  consume(): void {
    this.consumer.consume(async (data) => {
      this.randomService.doSomething('withParam');
    });
  }
}

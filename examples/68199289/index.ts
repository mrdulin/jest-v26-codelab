export class EventController {
  #event: string[];
  #lastIndex: number;

  constructor() {
    this.#event = [];
    this.#lastIndex = 0;
  }

  getEventHis(): string[] {
    return this.#event;
  }

  getLastIndex(): number {
    return this.#lastIndex;
  }
}

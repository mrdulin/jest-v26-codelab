export class SomeService {
  getTwitterWidgetData() {
    return {} as any;
  }
  startScriptLoad(): void {
    const twitterData = this.getTwitterWidgetData();
    twitterData._e = [];
    twitterData.ready = (callback: () => void) => {
      twitterData._e.push(callback);
    };
  }
}

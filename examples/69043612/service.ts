import { Observable, Observer } from 'rxjs';

export class CourseContentElementEmbedTweetService {
  private readonly TWITTER_OBJECT = 'twttr';
  private readonly document;

  constructor(document) {
    this.document = document;
  }

  getDocumentDefaultView() {
    return this.document.defaultView;
  }

  loadScript() {
    return new Observable((observer: Observer<unknown>) => {
      const documentDefaultView = this.getDocumentDefaultView();
      if (documentDefaultView) {
        this.document.defaultView[this.TWITTER_OBJECT].ready((twitterData: unknown) => {
          observer.next(twitterData);
          observer.complete();
        });
      }
    });
  }
}

import { makeAutoObservable } from 'mobx';
import { getPages } from './lib/api';

class DocumentStore {
  pages = [];
  currentPage = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPages = (pages) => {
    this.pages = pages;
    return this.pages;
  };

  setCurrentPage = (page) => {
    this.currentPage = page;
    return this.currentPage;
  };

  getPages = async (documentName) => {
    const pageUrls = await getPages('a-test', documentName);
    this.setCurrentPage(pageUrls[0]);
    this.setPages(pageUrls);
  };
}

export default DocumentStore;

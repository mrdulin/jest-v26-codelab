class DataService {
  constructor() {}

  async CreateItem() {
    try {
      return { data: true, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }

  async SendToAnalytics() {
    try {
      return { data: true, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
  async SendEmail() {
    try {
      return { data: true, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
}

module.exports = DataService;

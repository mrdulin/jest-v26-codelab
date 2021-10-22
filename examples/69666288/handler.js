const DataService = require('./data.service');

exports.handler = async (event) => {
  try {
    const dataService = new DataService();
    const createItem = await dataService.CreateItem();
    if (createItem.error) {
      return { statusCode: 500 };
    }
    const sendToAnalytics = await dataService.SendToAnalytics();
    if (sendToAnalytics.error) {
      return { statusCode: 500 };
    }
    const sendEmail = await dataService.SendEmail();
    if (sendEmail.error) {
      return { statusCode: 500 };
    }
    return { statusCode: 200 };
  } catch (e) {
    return { statusCode: 500 };
  }
};

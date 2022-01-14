class Client {
  async fetchRandomUser() {
    let response = await fetch('https://randomuser.me/api/?gender=male');
    if (response.status >= 400) {
      throw new Error('Error fetching random user');
    }
    return (await response.json()).results[0];
  }
}

export default new Client();

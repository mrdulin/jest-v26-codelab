const Api = {
  auth: {
    async logIn(payload) {
      return fetch('http://localhost:3000/api/login')
    }
  }
}

export { Api }
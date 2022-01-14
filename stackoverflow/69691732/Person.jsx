import React from 'react';
import client from './service/Client';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '' };
  }

  async componentDidMount() {
    const user = await client.fetchRandomUser();
    this.setState({ image: user.picture.large });
  }

  setError(error) {
    return this.setState({ errorStatus: error });
  }

  render() {
    return <img src={this.state.image} width="128" height="128" />;
  }
}

export default Person;

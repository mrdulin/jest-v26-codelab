import React, { Component } from 'react';
import { TopicItem } from './TopicItem';

export class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
      ],
    };
    this.references = {};
  }

  getOrCreateRef(id) {
    if (!this.references.hasOwnProperty(id)) {
      this.references[id] = React.createRef();
    }
    return this.references[id];
  }

  render() {
    const { topics } = this.state;

    return (
      <div>
        <ul>
          {topics.map((topic) => (
            <TopicItem key={topic.id} topic={topic} ref={this.getOrCreateRef(topic.id)} />
          ))}
        </ul>
      </div>
    );
  }
}

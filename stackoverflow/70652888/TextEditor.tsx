import React from 'react';

class TextEditor extends React.Component {
  handleChange = (e) => {
    console.log({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" name="name" id="name" onChange={this.handleChange} />
      </div>
    );
  }
}

export default TextEditor;

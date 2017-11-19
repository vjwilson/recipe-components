import React from 'react';
import TextInput from 'recipe-components/TextInput';

/** Required TextBox */
export default class ExampleOptional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.handler = this.handler.bind(this);
  }

  handler(event) {
    event.preventDefault();

    const updatedValue = event.target.value;

    this.setState({
      email: updatedValue
    });

  }
  render() {
    return (
      <TextInput
        id="example-required"
        label="Email"
        name="email"
        onChange={this.handler}
        required
       />
    )
  }
}

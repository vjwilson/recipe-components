import React from 'react';
import TextInput from 'recipe-components/TextInput';

/** TextBox with error */
export default class ExampleOptional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: 'Email must be at least 6 characters.'
    };

    this.handler = this.handler.bind(this);
  }

  handler(event) {
    event.preventDefault();

    const updatedValue = event.target.value;
    const newError = (updatedValue.length < 6)
      ? 'Email must be at least 6 characters.'
      : null
    ;

    this.setState({
      email: updatedValue,
      error: newError
    });

  }
  render() {

    return (
      <TextInput
        id="example-required"
        label="Email"
        name="email"
        value={this.state.email}
        onChange={this.handler}
        required
        error={this.state.error}
      >
        Type a valid email.
      </TextInput>
    )
  }
}

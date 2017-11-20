import React from 'react';
import TextInput from 'recipe-components/TextInput';
import FormGroup from 'recipe-components/FormGroup';

/** Horizontal Form Group */
export default class ExampleOptional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: ''
      }
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  render() {
    return (
      <FormGroup horizontal>
        <TextInput
          id="first-name"
          label="First Name"
          name="firstName"
          onChange={this.onChange}
          required
        />
        <TextInput
          id="middle-name"
          label="Middle Name"
          name="middleName"
          onChange={this.onChange}
        />
        <TextInput
          id="last-name"
          label="Last Name"
          name="lastName"
          onChange={this.onChange}
          required
        />
        <TextInput
          id="email"
          label="Email"
          name="middleName"
          onChange={this.handler}
          required
        />
      </FormGroup>
    )
  }
}

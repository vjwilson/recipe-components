import React from 'react';
import TextInput from 'recipe-components/TextInput';
import FormGroup from 'recipe-components/FormGroup';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      middleName: ''
    };

    this.handler = this.handler.bind(this);
  }

  handler(event) {
    event.preventDefault();

    const updatedValue = event.target.value;

    this.setState({
      middleName: updatedValue
    });

  }
  render() {
    return (
      <FormGroup>
        <TextInput
          id="example-optional"
          label="Middle Name"
          name="middleName"
          onChange={this.handler}
         />
      </FormGroup>
    )
  }
}

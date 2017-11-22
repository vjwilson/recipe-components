import React from 'react';
import SearchWidget from 'recipe-components/SearchWidget';

/** Search Widget */
export default class ExampleSearchWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };
  }

  onChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onSubmit = (value) => {
    alert(value);
  }

  render() {
    return (
      <div>
        <SearchWidget
          value={this.state.searchText}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
       <p>Search value: {this.state.searchText ||
        '(none)'}</p>
      </div>
    );
  }
}

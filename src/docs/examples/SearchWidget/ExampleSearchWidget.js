import React from 'react';
import SearchWidget from 'recipe-components/SearchWidget';

/** Search Widget */
export default class ExampleSearchWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      lastSubmittedSearch: ''
    };
  }

  onChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onSubmit = (value) => {
    this.setState({
      searchText: '',
      lastSubmittedSearch: value
    });
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
       <p>Last submitted search value: {this.state.lastSubmittedSearch ||
        '(none)'}</p>
      </div>
    );
  }
}

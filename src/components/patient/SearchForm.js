import React, {Component} from 'react';
import $ from 'jquery';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const query = this.refs.query.value;
    const self = this;
    console.log(query);

    $.ajax({
      url: 'http://api.dhavalpurohit.com/api/patients/search',
      data: { query: query},
      success: (data) => {
        self.props.handleSearch(data);
      },
      error: (xhr, status, error) => {
        alert('Search error: ', status, xhr, error);
      }
    });
  }

  render () {
    return (
      <input onChange={this.handleSearch}
       type="text"
       className="form-control"
       placeholder="Type search phrase here..."
       ref="query" />
    );
  }
}

export default SearchForm;

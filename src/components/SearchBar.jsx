import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  state = { searchTerm: '' };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  };
  //   onInputchange = (e) => {
  //     this.setState({ searchTerm: e.target.value });
  //   };

  render() {
    return (
      <div className="searchbar-container">
        <form className="search-form"
          onSubmit={this.onFormSubmit}
        >
          <input onChange={(e) =>
              this.setState({
                searchTerm: e.target.value,
              })
            }
            type="text"
            value={this.state.searchTerm}
            placeholder="Search Here ^^ ---->"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
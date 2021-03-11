import axios from 'axios';
import React, { Component } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

class App extends Component {
  state = { images: [] };
  // event handler
  OnSearchSubmit = async (term) => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=7KGamJxaeIUmF83v_FbTHJDv1yks6UhTOEQg52SXtDw&query=${term}`
    );
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.OnSearchSubmit} />
        {/* FOUND {this.state.images.length} images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
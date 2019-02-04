import React from 'react'

class SearchBar extends React.Component {
  render() {
    return(
      <div className="searchbardiv">
        <input className="searchbar" onChange={e => this.props.updateSearch(e.target.value)} type="text" placeholder="Search Here"></input>
      </div>
    )
  }
}

export default SearchBar;

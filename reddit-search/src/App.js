import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './main-header/main-header'
import RedditData from './SearchResultList/reddit-data'
import RedditSearch from './SearchForm/reddit-search'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
    }
  }

  render() {
    return (
      <div className="App">

        <RedditSearch setAppState={this.setState.bind(this)}/>

        { this.state.topics > 0 ?
          <RedditData topics={this.state.topics} />
          :
          undefined
        }
        
      </div>
    );
  }
}  

export default App;

// {/* <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
// To get started, edit <code>src/App.js</code> and save to reload.
// </p> */}
import React, { Component } from 'react';
import Main from './Main';
import { Spinner } from './Spinner.js';
import '../styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loaded: true,
      loading: false,
    };
  };
  
  onLoadEnd = () => {
    this.setState({ loaded: true });
  };

  render() {
    return (
      <div className="App">
        {!this.state.loaded && <Spinner onLoadEnd={this.onLoadEnd} />}
        {this.state.loaded && <Main />}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from "axios";
import Main from './Main';
import { Loader } from "./Loader";
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      loaded: false,
      loading: false,
    }
  }
  componentDidMount(){
    const host = 'http://localhost:8000/api/checkData';
    axios.get(host)
      .then((res) => {
        this.setState(() => {
          return {
            loaded: res.data.exists,
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  setToLoaded = () => {
    this.setState({ loaded: true });
  }
  render() {
    return (
      <div className="App">
        {!this.state.loaded && <Loader setToLoaded={this.setToLoaded} />}
        {this.state.loaded && <Main />}
      </div>
    );
  }
}

export default App;

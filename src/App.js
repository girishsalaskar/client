import React, { Component } from 'react';
import './App.css';
import { ENDPOINT } from './env';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testAPIRes : 'No message'
    }
  }

  callAPI = () => {
    console.log("API Called");
    fetch( ENDPOINT + "/testAPI" )
      .then(res => res.text())
      .then(res => { console.log(res); this.setState({testAPIRes : res});});
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <p> {this.state.testAPIRes} </p>
      </div>
    );
  }
}

export default App;

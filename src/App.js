import React, { Component } from "react";



class App extends Component {
  state = {
    test: "hello"
  };

  
  

  render() {
    return (
      
      <h1>
      {this.state.test}
      </h1>
    );
  }
}
export default App;
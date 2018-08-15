import React, { Component } from 'react';
import './App.css';

class App extends Component {
  data = [{ firstName: "Mary", lastName: "Rose" }];
  displayNames = [];
  getNames = () => {
    this.data.forEach(student => {
      // read the properties and build strings
      let fullName = '';
      student.values().forEach(prop => {
        fullName += prop + " ";
      });
      this.displayNames.push(fullName);
    });
  };

  // this is the rendered function


  render() {
    return (
      <div className="App">
        { this.displayNames.forEach(name => {
          return <div>${name}</div>;
        })}
      </div>
    );
  }
}

export default App;

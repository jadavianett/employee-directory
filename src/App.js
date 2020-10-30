import Header from "./components/Header";
import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <EmployeeTable/>
      </div>
    );
  }
}

export default App;

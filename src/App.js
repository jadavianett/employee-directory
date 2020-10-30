import Header from "./components/Header";
import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Search from "./components/Search";

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Search/>
        <EmployeeTable/>
      </div>
    );
  }
}

export default App;

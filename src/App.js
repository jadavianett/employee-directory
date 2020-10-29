import Header from "./components/Header";
import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeRow from "./components/EmployeeRow";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
  };
  render() {
    return (
      <div>
        <Header />
        <EmployeeTable />
        {this.state.employees.map((employee) => (
          <EmployeeRow name={employee.name} phone={employee.phone} email={employee.email} picture={employee.picture}/>
        ))}
      </div>
    );
  }
}

export default App;

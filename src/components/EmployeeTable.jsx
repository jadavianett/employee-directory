import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../employees.json";

class EmployeeTable extends Component {
  state = {
    employees,
    names: [],
  };
  // sorts the list of employees by last name
  sortByLastName = () => {
    let employeeArray = employees;
    employeeArray.sort((a, b) => {
      if (a.name.last < b.name.last) return -1;
      if (a.name.last > b.name.last) return 1;
      return 0;
    });
    // sets the employee array to a new sortedemployees element
    this.setState({
      sortedEmployees: employeeArray,
    });
  };

  // renders the table
  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <table className="table table-striped" id="employeeTable">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col" onClick={this.sortByLastName}>
                <span>Name</span>
              </th>
              <th scope="col">Phone Number</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          {/* // maps over the employee array to render a row for each employee */}
          {this.state.employees.map((employee) => (
            <EmployeeRow
              name={employee.name}
              phone={employee.phone}
              email={employee.email}
              picture={employee.picture}
            />
          ))}
        </table>
      </div>
    );
  }
}

// exports the component so that can be imported into the app.js
export default EmployeeTable;

import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../employees.json";

class EmployeeTable extends Component {
  state = {
    employees,
    names: [],
  };

  constructor(props) {
    super(props);
    this.sortAscending = this.sortAscending.bind(this);
  }

  componentDidMount() {
    let { names } = this.state.names;
    names = this.state.employees.map((employee) => employee.name);
    this.setState({ names });
  }

  sortAscending() {
    const { names } = this.state;
    names.sort((a, b) => a - b);
  }

  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <table className="table table-striped" id="employeeTable">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col" onClick={this.sortAscending}>
                <span>Name</span>
              </th>
              <th scope="col">Phone Number</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
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

export default EmployeeTable;

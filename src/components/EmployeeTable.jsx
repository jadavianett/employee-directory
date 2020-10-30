import React, { Component } from "react";
import EmployeeRow from "./EmployeeRow";
import employees from "../employees.json";


class EmployeeTable extends Component {
  state = {
    employees,
  };
  render() {
    return (
      <div style={{margin: "0 auto"}}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col"><span>Name</span></th>
              <th scope="col">Phone Number</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          {this.state.employees.map((employee) => (
          <EmployeeRow name={employee.name} phone={employee.phone} email={employee.email} picture={employee.picture}/>
        ))}
        
        </table>
      </div>
    );
  }
}

export default EmployeeTable;

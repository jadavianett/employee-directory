import React, { Component } from "react";

class EmployeeTable extends Component {
  render() {
    return (
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;

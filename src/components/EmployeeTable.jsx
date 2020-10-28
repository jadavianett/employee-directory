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
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>Mark Otto</td>
              <td>678-777-9999</td>
              <td>MarkOtto@example.com</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Jacob Thornton</td>
              <td>678-777-9999</td>
              <td>JacobThornton@example.com</td>

            </tr>
            <tr>
              <th scope="row"></th>
              <td>Larry Bird</td>
              <td>567-987-0000</td>
              <td>LarryBird@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;

import React from "react";

const EmployeeRow = (props) => {
  return (
    // renders the individual table rows for each employee on the employees.json file
    // takes in props
    <tbody>
      <tr class="table-row">
        <th scope="row">
          <img alt={props.name} src={props.picture.thumbnail} />
        </th>
        <td id="name">
          {props.name.first} {props.name.last}
        </td>
        <td>{props.phone}</td>
        <td style={{ width: "100px" }}>{props.email}</td>
      </tr>
    </tbody>
  );
};

// exports the component so that it can be imported into employeetable.jsx
export default EmployeeRow;

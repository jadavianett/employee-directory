import React from "react";


const EmployeeRow = (props) => {
    return (
        <tbody>
        <tr>
          <th scope="row"><img alt={props.name} src={props.picture.thumbnail} /></th>
          <td>{props.name.first} {props.name.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    );
};

export default EmployeeRow;
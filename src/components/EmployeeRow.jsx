import React from "react";

const EmployeeRow = (props) => {
    return (
      
        <tbody>
        <tr class= "table-row">
          <th scope="row"><img alt={props.name} src={props.picture.thumbnail} /></th>
          <td id = "name">{props.name.first} {props.name.last}</td>
          <td>{props.phone}</td>
          <td style={{width: "100px"}}>{props.email}</td>
        </tr>
      </tbody>
  
    );
};

export default EmployeeRow;
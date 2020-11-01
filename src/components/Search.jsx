import React, { Component } from "react";
import employees from "../employees.json";
import axios from "axios";

// state sets search to an empty string
class Search extends Component {
  state = {
    search: "",
    results: [],
  };
  componentDidMount() {
    axios.get(employees.name).then((res) => {
      this.setState({ results: res.data.results });
    });
  }
  // is called when when the input field is changed
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("employeeTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  
  // is called when the input form is submitted 
  handleSubmit = (event) => {
    event.preventDefault();
  };

  //renders the search bar 
  render() {
    return (
      <div id="search-bar">
        <form onSubmit={this.handleSubmit} className="text-center">
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Search.."
            id="search"
            name="search"
          />
        </form>
      </div>
    );
  }
}

// exports the component so that it can be imported into app.js
export default Search;

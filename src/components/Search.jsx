import React, { Component } from "react";
import employees from "../employees.json";
import axios from "axios";

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
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
  };

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

export default Search;

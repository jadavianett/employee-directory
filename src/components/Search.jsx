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
            this.setState({results:res.data.results});
        })
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.search);
    }
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

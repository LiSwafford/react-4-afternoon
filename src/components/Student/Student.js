import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super();

    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    console.log(this.props);
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        this.setState({
          studentInfo: results.data
        });
      });
  }

  render() {
    const { first_name, last_name, grade, email } = this.state.studentInfo;
    return (
      <div className="box">
        <h1>
          {first_name} {last_name}
        </h1>
        <h3>Grade: {grade} </h3>
        <h3>Email: {email}</h3>
      </div>
    );
  }
}

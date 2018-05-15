import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(results => {
        this.setState({
          students: results.data
        });
      });
  }

  render() {
    // console.log(this.props);
    // console.log("on state:", this.state.students);
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ));

    // console.log("map of students on state: ", students);
    return (
      <div className="box">
        <h1>{this.props.match.params.class} </h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}

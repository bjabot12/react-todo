import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: "white",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todo.completed ?
        "line-through" : "none"
    }
  }

  render() {
    const { id, title, comment } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        <p>{comment}</p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right"
}

export default TodoItem
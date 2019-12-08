import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";


class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem style={ItemStyle} key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

const ItemStyle = {
    display: "flex"
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;

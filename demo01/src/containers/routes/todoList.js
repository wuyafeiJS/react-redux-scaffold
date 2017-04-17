import { connect } from 'react-redux'
import React, { Component } from 'react';
import {ToggleTodo} from 'actions'
class List extends Component {
  render() {
    const {todos,toggleClick,toggles} = this.props;
    console.log(todos)
    return (
      <div>
        <ul>
          {todos.map((todo,index)=>(<Todo onClick={()=>{toggleClick(todo.id)}} todo={todo} key={index}/>))}
        </ul>
      </div>
    );
  }
}


class Todo extends Component {
  render () {
    const {todo,onClick} = this.props;
    return (
      <li onClick={onClick} style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</li>
    )
  }
}

const getList = (todo,filter) => {
  switch(filter){
        case "SHOW_ALL":
            return todo
        case "SHOW_COMPLETED":
            return todo.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todo.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
  return {
    todos: getList(state.AddTodo,state.VisibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleClick: (id) => {
      dispatch(ToggleTodo(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './todoList'
import Visibility from '../../components/Visibility'
//import FooterLink from './FooterLink'

import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <TodoList/>
        <Visibility/>
      </div>
    );
  }
}



export default connect()(Index)

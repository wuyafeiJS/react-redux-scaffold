import { connect } from 'react-redux'

import {AddTodo} from 'actions'
import {ToggleTodo} from 'actions'

import React, { Component } from 'react';

class Add extends Component {
  render() {
    const {todoClick} = this.props;
    console.log(this.state)
    return (
      <div>
        <input ref='text' type="text"/>
        <button onClick={e => {
            const val = this.refs.text.value;
            console.log(val)
            if(val.trim()!=''){
                todoClick(val)
            }
          
            this.refs.text.value = ''
          }}>添加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.AddTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoClick: (text) => {
      dispatch(AddTodo(text))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Add)
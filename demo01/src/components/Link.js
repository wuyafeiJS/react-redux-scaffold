import React, { Component } from 'react';

class Link extends Component {
  render() {
    const {active,children,vFilter}=this.props
    console.log(active,vFilter)
    if(active) {
        return <span>{children}</span>
    }
    return (<a href="#" onClick={e=>{
            e.preventDefault();
            vFilter()
        }}>{children}</a>)
  }
}

export default Link;
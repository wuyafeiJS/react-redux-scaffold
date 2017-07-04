import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'

function IndexPage({ data, children, loading }) {
  return (
    <div>
      <Link to='/products'>hahfsafdaha</Link>
      {children}
    </div>
  );
}


export default connect()(IndexPage);
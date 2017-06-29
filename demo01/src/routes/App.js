import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'

function IndexPage({ data, children, loading }) {
  !loading && console.log(data)
  return (
    <div>
      <Link to='/products'>hahfsafdaha</Link>
      {children}
    </div>
  );
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    data: state.app,
    loading: state.loading.models.app
  }
}

export default connect(mapStateToProps)(IndexPage);
import React from 'react';
import { connect } from 'dva';

function IndexPage(props) {
  return (
    <div>
      <div>hahaha</div>
      {props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
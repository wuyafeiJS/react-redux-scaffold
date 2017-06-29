import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <h1>Yay! Welcome to dva!</h1>
      <div />
      <ul>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://www.baidu.com">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
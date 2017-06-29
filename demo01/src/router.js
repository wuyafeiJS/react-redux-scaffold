import React from 'react';
import { Router, Route } from 'dva/router';
import App from './routes/App';
import Products from './routes/Products';

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/" component={App} />
//     </Router>
//   );
// }

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} >
        <Route path="/products" component={Products} />
      </Route>
    </Router>
  )
}


export default RouterConfig;

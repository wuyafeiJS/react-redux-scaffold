import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
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
        <IndexRoute component={Products} />
      </Route>
    </Router>
  )
}


export default RouterConfig;

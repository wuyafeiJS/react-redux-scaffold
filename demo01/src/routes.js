import Index from './containers/routes/Index';
import App from './containers/App';

const routes = [
  { path: '/',
    component: App,
    childRoutes: [
      { path: 'example',
        component: Index
      }
    ]
  }
];

export default routes;

import { hashHistory,browserHistory } from 'dva/router';
import dva from 'dva';
import routerConfig from './router';
// 1. Initialize
const app = dva({
    history: browserHistory
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(routerConfig);

// 5. Start
app.start('#app');
'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'test',  // don't remove the appEnv property here
  signinUrl: '/keystone/signin',
  apiPrefix: '/api'
};

export default Object.freeze(Object.assign(baseConfig, config));

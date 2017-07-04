import * as usersService from '../services/server';

export default {
  namespace: 'app',
  state: { name: 'wyf' },
  reducers: {
    userInfo(state, { payload: { data } }) {
        return { ...state, data }
    }
  },
  effects: {
    *fetchIt({ payload: { page } }, { call, put }) {
      const {data} = yield call(usersService.query, { page });
      yield put({
        type: 'userInfo',
        payload: {
          data: data,
        },
      });
    },
  },
  subscriptions: {
      setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        dispatch({ type: 'fetchIt', payload: {} })
      });
    },
  },
};

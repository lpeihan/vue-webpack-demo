import { SET_COUNTER } from './mutation-types';

const actions = {
  addCounter({ commit }, payload) {
    commit(SET_COUNTER, payload);
  }
};

export default actions;

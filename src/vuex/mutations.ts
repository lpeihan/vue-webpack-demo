import { SET_COUNTER } from './mutation-types';

const mutations = {
    [SET_COUNTER](state, payload = 1) {
        state.counter += payload;
    }
};

export default mutations;

import Constant from "./Constant";
import store from "./store";

export default {
    [Constant.SET_TEST]: (state, payload) => {
        store.state.test = payload.test;
    },

};
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    week: {
      curEvent: null,
    },
  },
  mutations: {
    setCurrent(state, id) {
      state.week.curEvent = id;
    },
  },
  getters: {
    curEvent(state): number | null {
      return state.week.curEvent;
    },
  },
});

import Vuex from "vuex";

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

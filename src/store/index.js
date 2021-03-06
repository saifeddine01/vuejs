import Vue from "vue";
import Vuex from "vuex";
import taskStore from "./modules/tasks";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tasks: taskStore,
  },
});

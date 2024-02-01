import moment from "moment";

const state = {
  currentDate: new Date(),
};
const mutations = {
  setCurrentDate(state, newDate) {
    state.currentDate = newDate;
  },
};
const actions = {
  updateCurrentDate({ commit }) {
    const newDate = new Date();
    commit("setCurrentDate", newDate);
  },
};
const getters = {
  formattedDate(state) {

    return moment();
  },

  getWeekAgoDate() {

    return moment().subtract(7, 'days');

  },
};
export default { namespaced: true, state, mutations, actions, getters };

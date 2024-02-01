const state = {
  main: {
    ...JSON.parse(localStorage.getItem("userInfo")),
    name: "Alexander Pierce",
    position: "Web Developer",
    state: {
      color: "#3c763d",
      name: "Online",
    },
    menus: JSON.parse(localStorage.getItem("userMenus")),
    createdAt: new Date(),
  },
};

const mutations = {
  UPDATE_USER_INFO(state, payload) {
    console.log(state.main);

    // Get Data localStorage
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.main;

    for (const property of Object.keys(payload)) {
      if (payload[property] !== null) {
        // If some of user property is null - user default property defined in state
        state.main[property] = payload[property];

        // Update key in localStorage
        userInfo[property] = payload[property];
      }
    }
    // Store data in localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  },
  UPDATE_USER_MENUS(state, payload) {
    // Get Data localStorage
    //const userMenus = JSON.parse(localStorage.getItem("userMenus")) || [];

    // Store data in localStorage
    localStorage.setItem("userMenus", JSON.stringify(payload));

    // Update state with parsed payload
    state.main.menus = payload;
  },
  UPDATE_USER_TOKEN(state, token) {
    // Store data in localStorage
    localStorage.setItem("accessToken", token);
    // Update the Authorization header in the Axios instance
    window.axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  UPDATE_USER_DISPLAYBLE_MENUS(state, displayableMenus) {
    // Store data in localStorage
    localStorage.setItem("displayableMenus", displayableMenus);
  },
};

export default {
  state,
  mutations,
};

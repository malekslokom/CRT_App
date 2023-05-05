const state = { user: {}, isAuthenticated: false }; //donnee mt3i
const getters = {
  // @ts-ignore
  getUser: state => state.user,
  // @ts-ignore
  isAuthenticated: state => state.isAuthenticated,
  // @ts-ignore
  isPresident: state => state.user.desc == "Présidente",
  // @ts-ignore
  isResponsableJeunes: state => state.user.desc == "Responsable jeunes",
  // @ts-ignore
  isVolontaire: state => state.user.desc == "Volontaire"
};

const mutations = {
  // @ts-ignore
  setUser(state, user: any) {
    state.user = user;
  },

  // @ts-ignore
  authenticate(state, auth: boolean) {
    state.isAuthenticated = auth;
  }
};

const actions = {};

export default { state, getters, mutations, actions };

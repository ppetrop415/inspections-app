export async function signIn({ dispatch }, credentials) {
  let response = await axios.post("auth/login/", credentials);

  return dispatch("getInspections", response.data);
}

export async function getInspections({ commit, state }, data) {
  if (data) {
    commit("SET_CREDENTIALS", data);
  }

  if (!state.token) {
    return;
  }

  try {
    let response = await Inspection.getAll();
    commit("SET_INSPECTIONS", response.data);
  } catch {
    commit("SET_CREDENTIALS", null);
  }
}

export function authenticated(state) {
  if (state.token) {
    return true;
  } else {
    return false;
  }
}

export function error(state) {
  return state.error;
}

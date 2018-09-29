export function managePresents(state, action){
  switch (state.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents++}
    default:
      return state;
  }
}

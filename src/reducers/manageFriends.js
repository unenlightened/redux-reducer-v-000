export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [state.friends..., action.friend]}
    default:
      return state
  }
}

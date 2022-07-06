export function reducer(state, action) {
  switch (action.type) {
    case "Increment": {
      return {
        ...state,
        count: state.count + Number(action.payload)
      };
    }
    case "decrement": {
      return {
        ...state,
        count: state.count - Number(action.payload)
      };
    }
    default: {
      return state;
    }
  }
}

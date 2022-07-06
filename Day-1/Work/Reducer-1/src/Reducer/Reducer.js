export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_AMOUNT": {
      return {
        ...state,
        count: state.count + action.amount
      };
    }
    case "INCREMENT_AMOUNTBy2000": {
      return {
        ...state,
        count: state.count + action.amount
      };
    }
    case "DECREMENT_AMOUNT": {
      return {
        ...state,
        count: state.count - action.amount
      };
    }
    default: {
      return state;
    }
  }
}

export const incrementAmount1000 = { type: "INCREMENT_AMOUNT", amount: 1000 };

export const incrementAmount2000 = {
  type: "INCREMENT_AMOUNTBy2000",
  amount: 2000
};

export const decrement = {
  type: "DECREMENT_AMOUNT",
  amount: 500
};

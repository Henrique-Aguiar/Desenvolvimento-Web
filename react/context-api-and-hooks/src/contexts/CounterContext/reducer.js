import * as actionTypes from './action-thpes';

export const reducer = (state, action) => {
  switch (actionTypes.type) {
    case actionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
  }
};

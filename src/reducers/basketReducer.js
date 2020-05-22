import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const initialState = {
  basketNumbers: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case ADD_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers + 1,
      };
    default:
      return state;
  }
};

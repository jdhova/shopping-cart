import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    grayshirt: {
      name: 'Gray Shirt',
      price: 15.0,
      numbers: 0,
      inCart: false,
    },
    whiteshirt: {
      name: 'White Shirt',
      price: 10.0,
      numbers: 0,
      inCart: false,
    },
    blueshirt: {
      name: 'Blue Shirt',
      price: 13.0,
      numbers: 0,
      inCart: false,
    },
    redshirt: {
      name: 'Red Shirt',
      price: 12.5,
      numbers: 0,
      inCart: false,
    },
    blackshirt: {
      name: 'Black Shirt',
      price: 17.2,
      numbers: 0,
      inCart: false,
    },
  },
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

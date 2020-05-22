import { GET_NUMBERS_BASKET } from './types';

// export const getBasket = () => {
//   return (dispatch) => {
//     console.log('Getting numbers in Basket');
//     dispatch({
//       type: Get_PRODUCT_BASKET,
//     });
//   };
// };

export const getNumbers = () => {
  return (dispatch) => {
    console.log('get number basket');
    dispatch({
      type: GET_NUMBERS_BASKET,
    });
  };
};

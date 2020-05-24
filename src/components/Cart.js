import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import basketReducer from '../reducers/basketReducer';
import { withRouter } from 'react-router-dom';
import grayshirt from '../images/grayshirt.jpg';
import blueshirt from '../images/blueshirt.jpeg';
import redshirt from '../images/redshirt.jpg';
import whiteshirt from '../images/whiteshirt.jpeg';
import blackshirt from '../images/blackshirt.jpeg';

const Cart = ({ basketProps }) => {
  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  const productImages = [
    grayshirt,
    blueshirt,
    redshirt,
    whiteshirt,
    blackshirt,
  ];
  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment>
        <div className='product'>
          <icon-incon name='close-circle'></icon-incon>
          <img src={productImages[index]} />
          <span className='sm-hide'>{product.price}</span>
        </div>

        <div className='price sm-hide'>${product.price},00</div>
        <div className='quantity'>
          <icon-icon
            className='decrease'
            name='arrow-black-circle-outline'
          ></icon-icon>
        </div>
        <div className='total'>${product.name * product.price},00 </div>
      </Fragment>
    );
  });

  console.log(productsInCart);
  return <div>the cart will be here</div>;
};

const mapStateToProps = (state) => ({
  //   cartcost: state.cartCost,
  //   products: state.products,
  basketProps: state.basketState,
});
export default connect(mapStateToProps, {
  pure: false,
})(Cart);

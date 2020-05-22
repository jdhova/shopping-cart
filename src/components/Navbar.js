import React from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

const Navbar = (props) => {
  console.log(props);
  return (
    <div>
      <header className='header'>
        <nav>
          <h2>Shopping Cart</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              You have <span>{props.basketProps.basketNumbers}</span> Products
              in Cart
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { getNumbers })(Navbar);

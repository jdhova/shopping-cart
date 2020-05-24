import React from 'react';
import grayshirt from '../images/grayshirt.jpg';
import blueshirt from '../images/blueshirt.jpeg';
import redshirt from '../images/redshirt.jpg';
import whiteshirt from '../images/whiteshirt.jpeg';
import blackshirt from '../images/blackshirt.jpeg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={grayshirt} alt='Gray Shirt' />
        <h3>Gray Shirt</h3>
        <h3>$15.00</h3>
        <a
          onClick={() => props.addBasket('grayshirt')}
          className='addToCart cart1'
          href='#'
        >
          Add to cart{' '}
        </a>
      </div>

      <div className='image'>
        <img src={whiteshirt} alt='White Shirt' />
        <h3>white Shirt</h3>
        <h3>$10.00</h3>
        <a
          onClick={() => props.addBasket('whiteshirt')}
          className='addToCart cart2'
          href='#'
        >
          Add to cart{' '}
        </a>
      </div>

      <div className='image'>
        <img src={blueshirt} alt='Blue Shirt' />
        <h3>Blue Shirt</h3>
        <h3>$13.00</h3>
        <a
          onClick={() => props.addBasket('blueshirt')}
          className='addToCart cart3'
          href='#'
        >
          Add to cart{' '}
        </a>
      </div>

      <div className='image'>
        <img src={redshirt} alt='Red Shirt' />
        <h3>Red Shirt</h3>
        <h3>$12.50</h3>
        <a
          onClick={() => props.addBasket('redshirt')}
          className='addToCart cart4'
          href='#'
        >
          Add to cart{' '}
        </a>
      </div>

      <div className='image'>
        <img src={blackshirt} alt='' />
        <h3>Black Shirt</h3>
        <h3>$17.20</h3>
        <a
          onClick={() => props.addBasket('blackshirt')}
          className='addToCart cart5'
          href='#'
        >
          Add to cart{' '}
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket, pure: false })(Home);

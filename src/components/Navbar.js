import React from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
  // console.log(props);
  return (
    <div>
      <header className='header'>
        <nav>
          <h2>Shopping Cart</h2>
          <Router>
            <ul>
              <li>
                <Link to='/'> Home</Link>
              </li>
              <li>
                <Link to='/about'> About</Link>
              </li>

              <li>
                <Link to='/cart'>
                  {' '}
                  You have <span>{props.basketProps.basketNumbers}</span>{' '}
                  Products in Cart
                </Link>
              </li>
            </ul>
          </Router>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { getNumbers })(Navbar);

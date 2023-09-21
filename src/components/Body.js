import React from 'react';
import imgCheckbox from '../../src/assets/check-affirmative.png';
import './Body.css'

function Body() {
  return (
      <div className="body-main">
        <h1>wait ! your order in progress.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className="body-icons flex">
          <div className='cart-review flex flex-column icon-column'>
            <img src={imgCheckbox} alt="checkbox_image"></img>
            <label>Cart Review</label>
          </div>
          <div className="checkout-checkbox flex flex-column icon-column">
          <img src={imgCheckbox} alt="checkbox_image"></img>
            <label>Checkout</label>
          </div>
          <div className="special-offer-checkbox flex flex-column icon-column">
            <p className="special-offer-checkbox-text inside-text">3</p>
            <label><b>Special Offer</b></label>
          </div>
          <div className="confirmation-checkbox flex flex-column icon-column">
            <p className="special-offer-checkbox-text inside-text1">4</p>
            <label>Confirmation</label>
          </div>
        </div>
      </div>
  );
}

export default Body;
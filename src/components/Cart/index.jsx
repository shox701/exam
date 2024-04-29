import React from 'react';
import './style.cart.scss'
import StarIcon from '../../assets/star.svg';

const CardComponent = ({ title, price, rate, image }) => {
  return (
    <div className="cart-container">
      <img src={image} alt="Product" className='cart-image' />
      <div className='cart-content'>
        <h5 className='title'>{title}</h5>
        <div className='price'>
          <h5 className='price-text'>${price}</h5>
          <div className='divider'></div>
          <div className='rate'>
            {rate}<img src={StarIcon} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

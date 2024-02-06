import React from 'react';

const DataProduct = (props) => {
  return (
    <div className='data1-flex'>
      <p className='data1-title'>{props.title}</p>
      <div className="images">
        <img src={props.src} alt="" />
      </div>
      <p className='data1-colors'>Colors: {props.colors.join(' ')}</p>
      <div className="data1-price">Price:{props.price}$</div>
    </div>
  );
};

export default DataProduct;
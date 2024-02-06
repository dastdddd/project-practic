import React from 'react';


//console.log(products);

const Product = (props) => {
  console.log(props); // data
  return (
    <div className='products-flex'>
      {
        props.data.map((item) => (
          <div className='products-item' key={item.id}>
            <p>ID №{item.id}</p>
            <p className='products-discount'>{item.discount}</p>
            <p className='products-title'>{item.title}</p>
            <p className='products-price'>Цена {item.price}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Product;
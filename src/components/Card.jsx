import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ imageSrc, title, price, onClick }) => {

  return (
    <div className='card'>
      <img className="card-image" src={imageSrc} alt={`Imagem de ${title}`} style={{ maxWidth: '100%', height: 'auto' }} />
      <h2 className='card-title'>{title}</h2>
      <h3 className='card-price'>{price}</h3>
    </div>
  );
};

export default Card;
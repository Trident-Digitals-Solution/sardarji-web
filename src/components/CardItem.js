import React, { useState } from 'react';

function CardItem(props) {

  const [readMore, setReadMore] = useState(false);

  const extraContent = <p>{props.text}</p>
  const linkName = readMore ? 'Read less' : 'Read more'


  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.initial}</h5>
            <div className="cards__item__text " onClick={() => { setReadMore(!readMore) }} > <p className="expand">{linkName}</p> </div>
            <h5 className="cards__item__text">{readMore && extraContent}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;

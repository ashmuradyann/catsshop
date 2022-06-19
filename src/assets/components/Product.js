import React, { useState } from 'react'
import cat from '../images/Cat.png'

const Product = ({ data, id }) => {

  const [selected, setSelected] = useState(false)

  return (
    <div className="product__wrapper" key={id}>
      <div onClick={() => setSelected(!selected)}
           className={data.disabled 
            ? "product disabled" 
            : selected
              ? "product selected" 
              : "product standard"}>
        <div className="product__info">
          <p className="firstLine">Сказочное заморское яство</p>
          <h1 className="product__title">Нямушка</h1>
          <h2>{data.taste}</h2>
          <p className="product__bonuses">{data.count}</p>
          <p className="product__bonuses">{data.mouses}</p>
          {data.client ? <p className="product__bonuses">заказчик доволен</p> : ""}
          <div className="product__weight">{data.weight}<span>кг</span></div>
        </div>
        <img className="cat__image" src={cat} alt="cat" />
      </div>
      {data.disabled 
        ? <p className="available__text__disabled">{data.disabledText}</p>
        : selected
          ? <p className={"available__text"}>{data.selectedText}</p>
          : <p className="available__text">Чего сидишь? Порадуй котэ, <a className="available__text__href" onClick={() => setSelected(!selected)} href="#app">купи.</a></p>}
    </div>
  )
}

export default Product
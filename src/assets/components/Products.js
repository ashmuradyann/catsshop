import React from 'react'
import Product from './Product'

const Products = () => {

    const data = [
        {
            taste: "с фуа-гра",
            count: "10 порций",
            mouses: "мышь в подарок",
            client: false,
            weight: "0,5",
            selectedText: "Печень утки разварная с артишоками.",
            disabledText: "Печалька, с фуа-гра закончился.",
            disabled: false
        },
        {
            taste: "с рыбой",
            count: "40 порций",
            mouses: "2 мыши в подарок",
            client: false,
            weight: "2",
            selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
            disabledText: "Печалька, с рыбой закончился.",
            disabled: false
        },
        {
            taste: "с курой",
            count: "100 порций",
            mouses: "5 мышей в подарок",
            client: true,
            weight: "5",
            selectedText: "Филе из цыплят с трюфелями в бульоне.",
            disabledText: "Печалька, с курой закончился.",
            disabled: true
        }
    ]

    return (
    <div className="products">
        {data.map((el, id) => <Product data={el} id={id} />)}
    </div>
    )
}

export default Products
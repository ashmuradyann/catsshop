import React from 'react'
import Products from './Products'
import Title from './Title'

const Container = () => {

  return (
    <div className="container">
        <Title value="Ты сегодня покормил кота?" />
        <Products />
    </div>
  )
}

export default Container
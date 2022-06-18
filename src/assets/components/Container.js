import React, { useState } from 'react'
import Products from './Products'
import Title from './Title'

const Container = () => {

  const [added, setAdded] = useState()

  return (
    <div className="container">
        {added ? <div className="buy added">Added</div> : <div className="buy deleted">Deleted</div>}
        <Title value="Ты сегодня покормил кота?" />
        <Products setAdded={setAdded} />
    </div>
  )
}

export default Container
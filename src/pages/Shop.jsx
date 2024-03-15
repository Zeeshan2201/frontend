import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Ruhan from '../Components/Hero/Ruhan'
import Faisal from '../Components/Hero/Faisal'

const Shop = () => {
  return (
    <div>
      {/* hello */}
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter />

    </div>
  )
}

export default Shop

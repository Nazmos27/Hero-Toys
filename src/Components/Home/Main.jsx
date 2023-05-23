import React from 'react'
import Banner from './Banner'
import CategoriseToys from './TabSection/CategoriseToys'
import useTitle from '../../CustomHooks/useTitle'
import Gallery from './Gallery'


const Main = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoriseToys></CategoriseToys>
      
    </div>
  )
}

export default Main
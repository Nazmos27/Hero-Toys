import React from 'react'
import Banner from './Banner'
import CategoriseToys from './TabSection/CategoriseToys'
import useTitle from '../../CustomHooks/useTitle'
import Gallery from './Gallery'
import Services from './Services'
import Mechanics from './Mechanics'


const Main = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoriseToys></CategoriseToys>
      <Services></Services>
      <Mechanics></Mechanics>
      
      
    </div>
  )
}

export default Main
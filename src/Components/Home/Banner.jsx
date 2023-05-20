import React from 'react'
import bannerImg from '../../../src/images/toybanner1.png'

const Banner = () => {
  return (
    <div>
      <div className='h-[500px] bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${bannerImg})`}}>
        <h1 className='md:text-3xl'>Welcome To the Toy heaven!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum natus earum aliquam debitis recusandae laboriosam hic ab vero fugiat?</p>
      </div>
    </div>
  )
}

export default Banner
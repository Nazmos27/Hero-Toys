import React from 'react'


const Gallery = () => {
  return (
    <div className='md:flex md:flex-row  flex-col-reverse md:my-20 md:h-[500px] my-10  border-gray-500 border-2 '>
      <div className='md:text-left text-center md:my-auto md:space-y-4 my-10  p-8'>
        <h1 className='md:text-2xl text-xl text-zinc-600'>Toy Gallery</h1>
        <p className='text-sm md:text-xl'>We Provide You Those Cool Action Figure From Your Favourite SuperHero Movies! <span className='text-purple-600'>Have a look!</span></p>
      </div>
      <div className="carousel  w-full md:w-2/3">
        <div id="slide1" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/ByvvnP6/ironman.jpg" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/Z23yLms/superman.jpg" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/Mh8Sn2k/wonderwoman.jpg" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/NZJD2fq/spiderman.jpg" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/61XhYmr/blackwidow.jpg
" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/7JySqB2/captainamerica.jpg
" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide7" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/RYPs03p/batman.jpg
" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide8" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/0K75np6/flash.webp
" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a>
            <a href="#slide9" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide9" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/kmMdQJ7/luke.jpg
" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">❮</a>
            <a href="#slide10" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide10" className="carousel-item relative md:w-full w-full">
          <img src="https://i.ibb.co/KmzdKk9/princes.jpg
" className="md:w-2/3 w-full md:h-80 md:mx-auto md:my-auto" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide9" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
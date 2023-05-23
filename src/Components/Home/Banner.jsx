import React from 'react'
import bannerImg from '../../../src/images/toybanner1.png'

const Banner = () => {
  return (
    <div>

      <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold">Hello there</h1>
            <p className="mb-5 md:text-xl text-xs">Welcome to our action figure toys eCommerce website! Get ready to embark on a thrilling adventure where you'll find a collection of the most iconic and beloved action figures. Whether you're a fan of superheroes, sci-fi legends, or classic characters, we've got you covered. Explore our vast selection, unleash your imagination, and bring your favorite heroes to life. With just a click, you can add excitement to your collection and immerse yourself in a world of action and epic battles. Start your journey now and let the adventure begin!</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner
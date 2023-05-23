import React from 'react'

const Services = () => {
  return (
    <div className='md:my-20 my-10'>
        <div className='md:h-[500px] h-56 text-center   bg-cover rounded-md' style={{backgroundImage: 'url("https://i.ibb.co/8xNhks2/new-blue-comic-book-background-flash-vintage-pop-art-superhero-background-for-comics-vector.jpg")'}}>
            <div className='mx-20 md:flex md:flex-col md:py-40 py-10 hover:scale-150 ease-in-out duration-300 '>
            <h1 className='md:text-5xl md:font-bold font-semibold text-white'>We Provide</h1>
            <ul className=''>
                <li className=' md:text-2xl text-xs text-white'>Free home Delivery for First Purchase</li>
                <li className=' md:text-2xl text-xs text-white'>Anytime exchange Within 2 days</li>
                <li className=' md:text-2xl text-xs text-white'>Online payment</li>
                <li className=' md:text-2xl text-xs text-white'>Custom order</li>
                <li className=' md:text-2xl text-xs text-white'>Quality material</li>
                
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Services
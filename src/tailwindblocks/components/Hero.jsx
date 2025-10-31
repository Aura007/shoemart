import React from 'react'


const Hero = () => {
  return (
    <section>
            <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
            <br className="hidden lg:inline-block"readymade gluten />
        </h1>
        <p className="mb-8 leading-relaxed"> Step into a world where style meets passion—discover exclusive collections, irresistible deals, and the thrill of finding your perfect pair at Shoemart. Elevate every stride and indulge in shoes that turn heads, spark confidence, and celebrate your unique journey. </p>
        <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore</button>
        </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded w-[500px]" alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxj2g7Whwc5cGPa___tdIWcuqsZkf5183wVQ&s" />
        </div>
    </div>
    </section>
    </section>
  )
}

export default Hero

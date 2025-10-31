import React from 'react'

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section>
      <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
            onClick={() => handleScroll('home')}
          >
            <img
              className="w-[50px] h-[50px]"
              src="https://w7.pngwing.com/pngs/339/837/png-transparent-sm-city-iloilo-sm-mall-of-asia-sm-city-clark-sm-mindpro-citimall-sm-supermalls-fcb-miscellaneous-blue-text-thumbnail.png"
              alt=""
            />
            <span className="ml-3 text-xl">Shoemart</span>
          </div>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <button onClick={() => handleScroll('home')} className="mr-5 px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Home</button>
            <button onClick={() => handleScroll('products')} className="mr-5 px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Products</button>
            <button onClick={() => handleScroll('about')} className="mr-5 px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">About</button>
            <button onClick={() => handleScroll('contact')} className="mr-5 px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">Contact</button>
          </nav>
        </div>
      </header>
    </section>
  )
}

export default Navbar

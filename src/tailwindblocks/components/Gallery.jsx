import React from 'react'

const Gallery = () => {
  return (
    <section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {/* === Product 1 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://www.pngall.com/wp-content/uploads/5/Men-Shoes.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">GlamStep</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>

            {/* === Product 2 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://png.pngtree.com/png-clipart/20250307/original/pngtree-men-shoe-png-image_20592465.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>

            {/* === Product 3 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://png.pngtree.com/png-clipart/20240316/original/pngtree-red-sport-shoes-isolated-png-image_14603439.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>

            {/* === Product 4 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://png.pngtree.com/png-vector/20250603/ourmid/pngtree-pair-of-stylish-blue-running-shoes-isolated-on-a-transparent-background-png-image_16458840.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>

            {/* === Product 5 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://rukminim2.flixcart.com/image/480/640/jy65j0w0/shoe/f/b/y/kre320-8-begone-blue-original-imafg3g6dzuyyefc.jpeg?q=90"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>

            {/* === Product 6 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://www.nicepng.com/png/full/85-851171_campus-shoes-men-sports-shoes-png.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Twilight</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>

            {/* === Product 7 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://wallpapers.com/images/hd/black-sports-running-shoe-ielzkhxr86y4gri2.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Midnight</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>

            {/* === Product 8 === */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden group">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1"
                  src="https://static.vecteezy.com/system/resources/previews/036/575/605/non_2x/puma-black-sneakers-isolated-png.png"
                />
                <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-lg">Buy</span>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SHOES</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Pathways</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}

export default Gallery

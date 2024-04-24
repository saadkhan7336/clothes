import React from 'react'
import Categories from './sections/Categories/Categories'
import Blog from './sections/Blog/Blog'
import Deal from './sections/Deal/Deal'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Navbar from './sections/Navbar/Navbar'
import Shop from './sections/Shop/Shop'
import Testimonial from './sections/Testimonial/Testimonial'

const App = () => {
  return (
    <main className='app'>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Shop/>
      <Deal/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </main>
  )
}

export default App
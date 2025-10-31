import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import About from '../components/About'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="products"><Gallery /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default LandingPage

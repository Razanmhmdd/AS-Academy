import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menus/Menu'
import Description from './components/Description/Description'
import Cards from './components/Cards/Cards'
import Demo from './components/Demo/Demo'
import CourseDetails from './components/CourseDetails/CourseDetails'
import Container from './components/Container/Container'
import Cards2 from './components/Cards2.jsx/Cards2'
import Question from './components/Question/Question'
import CourseDetails2 from './components/CourseDetails2.jsx/CourseDeatails2'
import Footer from './components/Footer/Footer'
import ContactForm from './components/Contact/Contactform'

const App = () => {
  return <>
    
  <main className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Menu/>
    <Description/>
    <Cards/>
    <Demo/>
    <CourseDetails/>
    <Container/>
    <Cards2/>
    <Question/>
    <CourseDetails2/>
    <ContactForm/>
    <Footer/>
    
    
  </main>
  </>
}

export default App
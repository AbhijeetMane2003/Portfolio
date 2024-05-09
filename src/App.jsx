import React from 'react'

import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import EducationAndExperience from './components/EducationAndExperience'
import MyWork from './components/MyWork'
import Contact from './components/Contact'

import cvPdf from '../public/Abhijeet_Mane_CV.pdf'

import '../src/css/App.css'

export default function App() {
  const cvUrl = cvPdf;

  return (
    <div style={{cursor: 'url("cursor.png"), auto'}}>
      <Header />
      <Home />
      <AboutMe cv={cvUrl}/>
      <MySkills />
      <EducationAndExperience />
      <MyWork />
      <Contact />
    </div>
  )
}

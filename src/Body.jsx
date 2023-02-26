import React from 'react'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import InputWord from './components/InputWord'
import SecondSection from './components/SecondSection'

const Body = () => {
  return (
    <main className='container'>
      <Header />
      <InputWord />
      <FirstSection />
      <SecondSection/>
    </main>
  )
}

export default Body
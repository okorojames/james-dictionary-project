import React from 'react'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import InputWord from './components/InputWord'

const Body = () => {
  return (
    <main className='container'>
      <Header />
      <InputWord />
      <FirstSection/>
    </main>
  )
}

export default Body
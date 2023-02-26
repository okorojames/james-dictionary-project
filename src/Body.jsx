import React from 'react'
import { useState } from 'react'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import InputWord from './components/InputWord'

const Body = () => {
  const [text, setText] = useState('')
  const [wordMeaning, setWordMeaning] = useState([])
  async function getWordMeaning(e) {
    e.preventDefault();
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    const data = await res.json()
    setWordMeaning(data)
    console.log(data)
    console.log(text)
  }
  return (
    <main className='container'>
      <Header />
      <InputWord setText={setText} getWordMeaning={getWordMeaning} />
      <FirstSection wordMeaning={wordMeaning} />
    </main>
  )
}

export default Body
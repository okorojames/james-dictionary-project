import React from 'react'

const InputWord = () => {
  return (
    <div className='inputFormDiv'>
      <form className='inputWordForm'>
        <input type="search" className='searchWordInput' />
        <i className="ri-search-line searchWordIcon"></i>
      </form>
    </div>
  )
}

export default InputWord
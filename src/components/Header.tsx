import React from 'react'

const Header = () => {
  return (
    <header className='bg-black p-8 flex flex-col justify-center items-center relative'>
      <h1 className='text-4xl mb-2'>Países</h1>
      <p>Descubra algumas curiosidades de Países</p>
      <form className="absolute right-8">
          <input type="text" placeholder="pesquisa" />
        </form>
    </header>
  )
}

export default Header

import React from 'react'

const Header = () => {
  return (
    <div className='Headersection'>
      <div className='left'>
        <div  className='title'>Shopping Mall</div>
      </div>
      <div className='center'>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Childern</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search...'></input>
      </div>
      <div className='right'>
        <div className='signin'>Signin</div>
        <div className='cart'>Cart</div>
      </div>
    </div>
  )
}

export default Header

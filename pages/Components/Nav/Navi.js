import React from 'react'
import logo from '../../Assets/Images/img/logo.png'

export default function Navi() {
  return (
    <div className='w-full text-white'>
      <div className='max-w-7xl grow  m-auto flex items-center '>

        {/* Logo */}
      <div className='p-5'>
        <img src={logo} alt="" />
        </div>

        {/*Search  */}
        <div className='p-5 grow  '>
          <input className='rounded-full w-full h-10' type="search" />
        </div>

        {/* Login */}
        <div className='p-5 grow'>
        <div className='flex float-right'>
        <a><p className='px-5'>Giriş</p></a>
        <a><p>Kayıt Ol</p></a>
        </div>
        </div>
      </div>
    </div>
  )
}

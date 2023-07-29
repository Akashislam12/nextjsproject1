import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='mb-3'>
      <nav className='flex'>
        <h1 className='inline ml-20 rounded-sm text-xl red bg-gray-400 p-1 '>AKASH`Profile</h1>
      <ul className='flex text-center justify-center m-auto py-3 '>
        <Link className='mx-3' href="/"><li>Home</li></Link>
        <Link className='mx-3' href="/about"><li>About</li></Link>
        <Link className='mx-3' href="/blog"><li>Blog</li></Link>
        <Link className='mx-3' href="/contack"><li>Contack</li></Link>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
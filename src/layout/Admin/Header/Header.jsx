import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

<ul className='site__ul'>
        
        <li><Link style={{textDecoration:'none',color:'white'}} to='Orders'>Orders</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='Books'>Books</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link></li>
    </ul>
    </div>
  )
}

export default Header
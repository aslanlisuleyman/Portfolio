import React from 'react'
import Header from '../../layout/Site/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Site/Footer/Footer'

const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot
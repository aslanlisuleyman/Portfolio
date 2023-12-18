import React from 'react'
import Header from '../../layout/Admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/Admin/Footer/Footer'

const AdminRoot = () => {
  return (
   <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
   
   </React.Fragment>
  )
}

export default AdminRoot
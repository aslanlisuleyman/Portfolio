import React from 'react'
import SiteRoot from '../pages/Site/SiteRoot'
import Home from '../pages/Site/Home/Home'
import Wishlist from '../pages/Site/Wishlist/Wishlist'
import Shop from '../pages/Site/Shop/Shop'
import Order from '../pages/Site/Order/Order'
import Contact from '../pages/Site/Contact/Contact'
import CheckOut from '../pages/Site/CheckOut/CheckOut'
import Card from '../pages/Site/Card/Card'
import Detail from '../pages/Site/Detail/Detail'
import AdminRoot from '../pages/Admin/AdminRoot'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import Books from '../pages/Admin/Books/Books'
import Orders from '../pages/Admin/Orders/Orders'

const Routes = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'Wishlist',
        element:<Wishlist/>
    },{
        path:'Shop',
        element:<Shop/>
    },{
        path:'Order',
        element:<Order/>
    },{
        path:'Contact',
        element:<Contact/>
    },{
        path:'CheckOut',
        element:<CheckOut/>
    },{
        path:'Card',
        element:<Card/>
    },{
        path:'/:id',
        element:<Detail/>
    },{}]

},{
    path:'/admin',
    element:<AdminRoot/>,
    children:[{
        path:'',
        element:<Books/>
    },{
        path:'Books',
        element:<Books/>
    },{
        path:'Orders',
        element:<Orders/>
    }]
}]

export default Routes
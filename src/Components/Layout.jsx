import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Store/store'
const Layout = () => {
    return (
        <Provider store={store}>
            <Navbar />
            <Outlet />
        </Provider>



    )
}

export default Layout
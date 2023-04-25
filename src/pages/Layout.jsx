import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <Box>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </Box>
    )
}

export default Layout
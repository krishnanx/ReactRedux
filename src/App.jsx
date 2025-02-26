import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Product from './Components/Product'
import Dashboard from './Components/Dashboard'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import { Box } from '@chakra-ui/react'
import Layout from './Components/Layout'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <>
      <Box
        w="99.2vw"
        display='flex'

        p="0"
      >
        <RouterProvider router={router} />
      </Box >
    </>
  )
}

export default App

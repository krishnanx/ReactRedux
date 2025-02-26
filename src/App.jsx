import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Product from './Pages/Product'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import { Box } from '@chakra-ui/react'
import Layout from './Components/Layout'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/Products" element={<Product />}></Route>
    </Route>
  ))
  return (
    <>
      <Box
        w="99.2vw"
        display='flex'
        flexDirection="column"
        p="0"
      >
        <RouterProvider router={router} />
      </Box >
    </>
  )
}

export default App

import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Product from './Components/Product'
import Dashboard from './Components/Dashboard'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import { Box } from '@chakra-ui/react'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <>
      <Box
        w="99.2vw"
        display='flex'
        bgColor="#84B2D7"
        p="0"
      >
        <RouterProvider router={router} />
      </Box >
    </>
  )
}

export default App

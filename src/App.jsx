import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Product from './Components/Product'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>

    </Route>
  ))
  return (
    <>
      <Product />
    </>
  )
}

export default App

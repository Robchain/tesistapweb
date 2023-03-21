import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../views/Inicio'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}

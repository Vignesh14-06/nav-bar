import React from 'react'
import {Routes, Route } from 'react-router'
import Dashboard from '../Dashboard'
import Accounts from '../Accounts'
import Profile from '../Profile'
import Settings from '../Settings'

const RoutePath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/accounts" element={<Accounts/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default RoutePath

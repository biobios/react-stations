// DO NOT DELETE

import React from 'react'
import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}

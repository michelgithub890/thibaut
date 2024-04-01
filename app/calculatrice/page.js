'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'

const Calculatrice = () => {
    const [number, setNumber] = useState(0)

    const maMethode = () => {
        setNumber(number + 1)
    }

  return (
    <div>

      <div>je suis une calculatrice</div>

      <div>nombre : {number}</div>

      <Button variant='contained' onClick={maMethode}>Ajouter un nombre</Button>

    </div>
  )
}

export default Calculatrice

import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'
import Calendar from '../components/calendar'
import Calendario from '../components/calendario'

const fecha = new Date(2018, 11);

export const InternalPage = () => {
  return (
    <div className='page'>
      <div className='logo'>
        <img src={LogoUSM} height={60} alt='logo usm' />
        <h4>Universidad Técnica Federico Santa María</h4>
      </div>
      <NavBar />
      <h2>Calendario</h2>
      <div className='base' style={{
            display: 'grid',
            aspectRatio: '1/1',
            width: '60%',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gridTemplateRows: 'repeat(7, 1fr)',
            gap: '1px'
        }}>
            {
              ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, key) => {
                return (
                  <div key={key} style={{gridColumn: (key+1).toString(), gridRow: '1', fontSize: '1vw', textAlign: 'center', alignSelf: 'center'}}>
                    {day}
                  </div>    
                )
              })
            }
            {
              [1,2,3,4,5,6,7].map((col) => {
                return(
                  <div key={col} style={{gridColumn: (col).toString(), gridRow: '2', fontSize: '1vw', textAlign: 'center', alignSelf: 'center', width: '100%', height: '100%', border: '1px solid black'}}>
                    {fecha.getMonth()}
                  </div>
                )
              })
            }
            {
              [1,2,3,4,5,6,7].map((col) => {
                return(
                  <div key={col} style={{gridColumn: (col).toString(), gridRow: '3', fontSize: '1vw', textAlign: 'center', alignSelf: 'center', width: '100%', height: '100%', border: '1px solid black'}}>
                    {fecha.getDay()}
                  </div>
                )
              })
            }
            {
              [1,2,3,4,5,6,7].map((col) => {
                return(
                  <div key={col} style={{gridColumn: (col).toString(), gridRow: '4', fontSize: '1vw', textAlign: 'center', alignSelf: 'center', width: '100%', height: '100%', border: '1px solid black'}}>
                    3
                  </div>
                )
              })
            }
            {
              [1,2,3,4,5,6,7].map((col) => {
                return(
                  <div key={col} style={{gridColumn: (col).toString(), gridRow: '5', fontSize: '1vw', textAlign: 'center', alignSelf: 'center', width: '100%', height: '100%', border: '1px solid black'}}>
                    4
                  </div>
                )
              })
            }
            {
              [1,2,3,4,5,6,7].map((col) => {
                return(
                  <div key={col} style={{gridColumn: (col).toString(), gridRow: '6', fontSize: '1vw', textAlign: 'center', alignSelf: 'center', width: '100%', height: '100%', border: '1px solid black'}}>
                    5
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default InternalPage

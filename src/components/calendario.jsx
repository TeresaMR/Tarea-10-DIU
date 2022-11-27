import React from 'react'

export default function Calendario() {
    return (
        <div className='base' style={{
            display: 'grid',
            width: '80%',
            gridTemplateColumns: 'repeat(7, 100px)',
        }}>
            <div style={{gridColumn: '2', gridRow: '3', backgroundColor: 'blue'}}>

            </div>
            <div style={{gridColumn: '7', gridRow: '6', backgroundColor: 'blue'}}>

            </div>

        </div>
    )
}
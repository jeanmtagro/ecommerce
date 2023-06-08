import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <Spinner
            animation='border' //grow
            role='status'
            style={{
                height: '50px',
                width: '50px',
                margin: 'auto',
                display: 'block',
                color: '#0c4d7d'
            }}
        >
            <span className='sr-only'></span>
        </Spinner>
    )
}

export default Loader

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Redirect = () => {
    const [time, setTime] = useState(3)
    const timeout = useRef(0)
    const navigate = useNavigate()

    useEffect(() => {
        clearTimeout(time)
        timeout.current = setTimeout(() => {
            setTime((t) => t-1)
        }, 1000)

        if (time < 0 ) {
            navigate('/')
        }
        return () => {
            clearTimeout(time)
        }
    }, [time])
    return (
        <div>
            <h1>get out of here in: {time}</h1>
        </div>
    )
}
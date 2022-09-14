import React, {useState, useEffect} from 'react'
import './IfoodCounter.css'

export default function IfoodCounter() {
    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState('counter-button-active')

    useEffect(() => {
        document.getElementById('moeda').innerHTML = value * 3
    },[value])

    function up (){
        setValue(value + 1)
        setButtonStyle('counter-button-active')
    }

    function down() {
        if(value <= 1) {
            setButtonStyle('counter-button-desactive')
        }

        if(value > 0) {
            setValue(value - 1)  
        }
    }

  return (
    <div className='countex-wrapper'>
        <button className={buttonStyle} onClick={down}>
            -
        </button>
        <p>{value}</p>
        <button className='counter-button-active' onClick={up}>
            +
        </button>
        <button id='moeda'></button>
    </div>
  )
}

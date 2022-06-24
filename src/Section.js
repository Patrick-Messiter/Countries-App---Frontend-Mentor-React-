import React from 'react'

function Section (props) {
    
    function backToMain () {
        props.setToggle(false)
    }
    
    return (
        <section>
            <img src = {props.item.flags.svg} alt = {`${props.item.name.common} flag`}/>
            <h1>{props.item.name.common}</h1>
            <button onClick={backToMain}>Back</button>
        </section>
    )
}

export {Section}
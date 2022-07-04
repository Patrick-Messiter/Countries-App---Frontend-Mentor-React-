import React from 'react';


function Navbar (props) {

    function togglingMode() {
        props.setToggleDarkMode(!props.toggleDarkMode)
    }

    return (
        <nav className={props.toggleDarkMode ? "DarkMinor Navbar" : "LightMinor Navbar"}>
            <div className='Navbar-inner'>
                <h1>Where in the world?</h1>
                {props.toggleDarkMode ? <h4 onClick={() => togglingMode()}>&#127774; Light Mode</h4> : <h4 onClick={() => togglingMode()}>&#127769; Dark Mode</h4>}
            </div>
        </nav>
    )
}

export {Navbar}
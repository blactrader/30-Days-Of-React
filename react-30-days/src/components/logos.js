import React from 'react'
import css_logo from '..//images/css_logo.png'
import html_logo from '../images/html_logo.png'
import js_logo from '../images/js_logo.png'
import react_logo from '../images/react_logo.png'


const logoSec = () => {
    return (
        <div className="logSec">
        <img id="logos" src={css_logo} alt="css"/>
        <img id="logos" src={html_logo} alt="html"/>
        <img id="logos" src={js_logo} alt="js"/>
        <img id="logos" src={react_logo} alt="react"/>
        </div>
    )
}

export default logoSec
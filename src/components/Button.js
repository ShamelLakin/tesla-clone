import React from 'react'
import './Button.css'

const Button = ({imp, text, link}) => {
    return (
      <div className={`button ${imp === "secondary" ? "button__white" : ""}`}>
        <a
          style={{ display: "table-cell" }}
          href="https://github.com/ShamelLakin/ShamelLakin"
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </div>
    );
}

export default Button


import React from "react";

const Button = ({ styleSpan, style, value, children, func}) => {

    return (
        <button 
            onClick={func}
            style={{ ...style }}>
            <span style={{ ...styleSpan }}>
                {children}
            </span> {value}
        </button>
    )
}

export default Button;
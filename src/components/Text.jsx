import React from "react";

const Text = ({addStyle, style, text}) => {

    return(
        <p style={{...style, ...addStyle}}>{text}</p>
    )
}

export default Text;
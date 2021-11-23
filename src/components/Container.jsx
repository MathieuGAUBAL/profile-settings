import React from "react";

const Container = ({selectorClass, styleAdd ,style, children}) => {
    return(
        <div className={selectorClass} style={{...style, ...styleAdd}}>{children}</div>
    )
}


export default Container;
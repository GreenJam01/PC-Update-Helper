import "./container.css"
import React from "react";

export function Container(
    {children, className = ""} : {
        children: React.ReactNode | React.ReactNode[] | null,
        className?: string
    }
){
    if (className !== "") 
        className = "_" + className 
    return(
        <div className={"wrapper" + className}>
            {children}
        </div>
    )
}
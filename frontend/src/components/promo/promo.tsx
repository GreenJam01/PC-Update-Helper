import "./promo.css"
import React from "react";

export function Container(
    {children, className = ""} : {
        children: React.ReactNode | React.ReactNode[] | null,
        className?: string
    }
){
    return(
        <section className={"wrapper " + className}>
            {children}
        </section>
    )
}
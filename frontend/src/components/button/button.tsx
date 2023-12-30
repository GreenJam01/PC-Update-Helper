import React from "react";
import "./button.css"

export function Button<T>(
    {
      children,
      className,
      type = "primary",
      filling = undefined,
      clickListener = (e, t) => {},
      onFocus = () => {},
      onBlur = () => {},
      onClick = () => {} // Добавим свойство onClick в параметры компонента
    }: {
      children: React.ReactNode,
      className?: string,
      type?: string,
      filling?: T,
      clickListener?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, t: T) => void,
      onFocus?: () => void,
      onBlur?: () => void,
      onClick?: () => void // Обновленное свойство onClick
    }
  ){
    let buttonType = "button--" + type + " ";
    return(
      <button
          className={"button "+ buttonType + (className ? className : "")}
        //   onClick={(event)=>{clickListener(event, filling!)}}
          onFocus={()=>{onFocus()}}
          onBlur={()=>{onBlur()}}
          onClick={onClick} // Передаем свойство onClick внутреннему элементу button
      >
          {children}
      </button>
    )
  }

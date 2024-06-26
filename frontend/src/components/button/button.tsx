import React from 'react';

import './button.css';
import './buttonMedia.css'

export function Button<T>(
  {
    children,
    className,
    type = 'primary',
    filling = undefined,
    clickListener = (e, t) => {},
    onFocus = () => {},
    onBlur = () => {},
    onClick = () => {}, // Добавим свойство onClick в параметры компонента
    ref = undefined
  }: {
      children: React.ReactNode;
      className?: string;
      type?: string;
      filling?: T;
      clickListener?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, t: T) => void;
      onFocus?: () => void;
      onBlur?: () => void;
      onClick?: () => void; // Обновленное свойство onClick
      ref?: React.Ref<HTMLButtonElement>;
    }
){
  const buttonType = `button--${ type } `;
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    clickListener(event, filling!);
    onClick(); // Вызываем переданный обработчик события onClick
  };
  return(
    <button
      className={`button ${ buttonType }${className ? className : ''}`}
      onClick={handleButtonClick} // Используем обработчик нажатия кнопки, который вызывает clickListener и onClick
      onFocus={()=>{
        onFocus();
      }}
      onBlur={()=>{
        onBlur();
      }}
      ref={ref}
    >
      {children}
    </button>
  );
}

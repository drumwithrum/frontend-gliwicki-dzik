import React, { useState, FC } from 'react';
import { ButtonBase, Ripple } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

interface RippleStyle {
  position: string;
  top: string;
  left: string;
  height: string;
  width: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  const initialState: RippleStyle[] = [];
  const [ripples, setRipples] = useState<RippleStyle[]>(initialState);

  const onRippleAdd = (e: React.MouseEvent<HTMLElement>): void => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - (size / 2);
    const y = e.pageY - pos.y - (size / 2);
    const ripple = {
      position: 'absolute',
      top: y + 'px',
      left: x + 'px',
      height: size + 'px',
      width: size + 'px',
    };
    setRipples([...ripples, ripple]);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onRippleAdd(e);
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonBase onClick={handleClick} {...props}>
      {ripples.map((item: any, index) => <Ripple style={item} key={`riplpe-item-${index}`} />)}
      {children}
    </ButtonBase>
  );
};

export default Button;

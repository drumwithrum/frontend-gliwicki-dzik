import React, { useState, FC } from 'react';
import { Wrapper, InputBase, Icon, Label } from './Input.style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  label?: string;
}

const Input: FC<InputProps> = ({
  placeholder = '',
  onChange,
  value = '',
  name,
  type = 'text',
  label = '',
  color,
  backgroundColor = 'grey',
  icon,
  ...restProps
}) => {
  const [inputValue, onInputChange] = useState(value);
  const handleChange = (e: any) => {
    if (onChange) { onChange(e.target.value); }
    onInputChange(e.target.value);
  };
  return (
    <Wrapper {...restProps}>
      {label && <Label>{label}</Label>}
      <InputBase
        onChange={handleChange}
        placeholder={placeholder}
        value={inputValue}
        type={type}
        color={color}
        backgroundColor={backgroundColor}
        {...restProps}
      />
      {icon && <Icon src={icon} alt={`${name}-input-icon`} />}
    </Wrapper>
  );
};

export default Input;

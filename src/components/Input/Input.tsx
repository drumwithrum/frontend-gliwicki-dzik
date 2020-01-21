import React, { useState } from 'react';
import { Wrapper, InputBase, Icon, Label } from './Input.style';

interface InputProps<T> {
  placeholder?: string;
  name: string;
  onChange?: (value: string) => void;
  type?: string;
  value?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  inputProps ?: T;
  label?: string;
}

const Input = <T extends {}>({
  placeholder = '',
  onChange,
  value = '',
  name,
  type = 'text',
  label = '',
  color,
  backgroundColor = 'grey',
  icon,
  inputProps,
  ...props
}: InputProps<T>) => {
  const [inputValue, onInputChange] = useState(value);
  const handleChange = (e: any) => {
    if (onChange) { onChange(e.target.value); }
    onInputChange(e.target.value);
  };
  return (
    <Wrapper {...props}>
      {label && <Label>{label}</Label>}
      <InputBase
        onChange={handleChange}
        placeholder={placeholder}
        value={inputValue}
        type={type}
        color={color}
        backgroundColor={backgroundColor}
        {...inputProps}
      />
      {icon && <Icon src={icon} alt={`${name}-input-icon`} />}
    </Wrapper>
  );
};

export default Input;

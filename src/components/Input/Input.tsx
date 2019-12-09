import React, { FC, useState } from 'react';
import { Wrapper, InputBase, Icon } from './Input.style';

interface InputProps {
  placeholder?: string;
  name: string;
  onChange?: (value: string) => void;
  type?: string;
  value?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  inputProps ?: any;
}

const Input: FC<InputProps> = ({
  placeholder = '',
  onChange,
  value = '',
  name,
  type = 'text',
  color,
  backgroundColor,
  icon,
  inputProps,
  ...props
}) => {
  const [inputValue, onInputChange] = useState(value);
  const handleChange = (e: any) => {
    if (onChange) { onChange(e.target.value); }
    onInputChange(e.target.value);
  };
  return (
    <Wrapper {...props}>
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

import React, { useState } from 'react';
import { Wrapper, SelectBase, Icon, Label, SelectItem } from './Select.style';

interface SelectProps<T> {
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
  input?: object;
  options?: {
    value: string | number;
    title: string | number;
  }[];
}

const Select = <T extends {}>({
  placeholder = '',
  onChange,
  value = '',
  name,
  label = '',
  color,
  backgroundColor = 'white',
  icon,
  inputProps,
  input,
  options = [],
  ...props
}: SelectProps<T>) => {
  const [inputValue, onSelectChange] = useState(value);
  const handleChange = (e: any) => {
    if (onChange) { onChange(e.target.value); }
    onSelectChange(e.target.value);
  };
  return (
    <Wrapper {...props}>
      {label && <Label>{label}</Label>}
      <SelectBase
        onChange={handleChange}
        placeholder={placeholder}
        value={inputValue}
        backgroundColor={backgroundColor}
        disableUnderline
        {...inputProps}
        {...input}
      >
        {options.map((item) => (
          <SelectItem value={item.value} key={`${name}-select-${value}`}>{item.title}</SelectItem>
        ))}
      </SelectBase>
      {icon && <Icon src={icon} alt={`${name}-input-icon`} />}
    </Wrapper>
  );
};

export default Select;

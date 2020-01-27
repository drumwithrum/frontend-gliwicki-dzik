import React, { useState } from 'react';
import { Wrapper, DatePickerBase, Label } from './DatePicker.style';

interface DatePickerProps<T> {
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
  min?: number;
}

const DatePicker = <T extends {}>({
  placeholder = '',
  onChange,
  value = '',
  name,
  label = '',
  color,
  backgroundColor = 'white',
  icon,
  inputProps,
  min,
  input,
  ...props
}: DatePickerProps<T>) => {
  const [inputValue, onDatePickerChange] = useState(value);
  const handleChange = (e: any) => {
    if (onChange) { onChange(e.target.value); }
    onDatePickerChange(e.target.value);
  };
  return (
    <Wrapper {...props}>
      {label && <Label>{label}</Label>}
      <DatePickerBase
        onChange={handleChange}
        placeholder={placeholder}
        value={inputValue}
        type="date"
        defaultValue="2017-05-24T10:30"
        color={color}
        variant="outlined"
        min={min}
        {...inputProps}
        {...input}
      />
    </Wrapper>
  );
};

export default DatePicker;

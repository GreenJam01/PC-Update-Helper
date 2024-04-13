import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Nullable } from '../../types/nullable';

interface SelectMuiProps<T> {
  value: T | undefined;
  setValue: (value: T | undefined) => void;
  options: T[];
  label: string;
}

const SelectMui = <T extends { title: string}>({ value, setValue, options, label }: SelectMuiProps<T>) => (
  <FormControl sx={{ m: 1, minWidth: 420 }}>
    <InputLabel id="select-mui-label">{label}</InputLabel>
    <Select value={value} onChange={(e) => setValue(e.target.value as Nullable<T>)} defaultValue={value}>
      {options.map((option) => (
        <MenuItem key={option.name} value={option}>
          {option.title}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectMui;

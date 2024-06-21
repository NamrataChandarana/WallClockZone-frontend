// CustomInput.js
import React from 'react';
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import FormErrorHandler from './FormErrorHandler';
const FormInput = ({ label, placeholder, value, onChange, errors, readOnly, isSelect = false,type}) => {
  return (
    <FormControl>
      <FormLabel fontWeight="sm">{label}</FormLabel>
      {isSelect ? (
        <Select  placeholder={placeholder} value={value} onChange={onChange} isDisabled={readOnly} rounded="sm">
          <option value="Manufacturer">Manufacture</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Raw material suppliers">Raw material suppliers</option>
            <option value="Transpoter">Transpoter</option>
            <option value="Designer">Designer</option>
        </Select>
      ) : (
        <Input placeholder={placeholder} type={type} value={value} onChange={onChange} readOnly={readOnly} rounded="sm" />
      )}
      <FormErrorHandler errors={errors} />
    </FormControl>
  );
};

export default FormInput;

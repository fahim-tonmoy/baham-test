import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import React from "react";

// import { useField } from "formik";

const InputField = ({
  label,
  name,
  placeHolder,
  type,
  onChange,
  values,
  errorMsg,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        values={values}
        autoComplete="off"
        required
      />
      <FormHelperText color="red">{errorMsg}</FormHelperText>
    </FormControl>
  );
};

export default InputField;

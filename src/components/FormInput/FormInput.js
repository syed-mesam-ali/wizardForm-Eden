import React from "react";
import { FormGroup, FormText, Input, Label } from "reactstrap";
// create input box with data and handle error
const FormInput = ({
  id,
  input,
  label,
  type,
  inputPlaceHolder,
  maxDate,
  minDate,
  meta: { error, touched },
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      id={id}
      {...input}
      type={type}
      placeholder={inputPlaceHolder}
      max={maxDate}
      min={minDate}
    />
    {touched && <FormText className="help-block error-color">{error}</FormText>}
  </FormGroup>
);

export default FormInput;

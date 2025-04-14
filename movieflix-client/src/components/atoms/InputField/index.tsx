/* eslint-disable no-unused-vars */
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { FormControl, styled } from "@mui/material";
import React from "react";

interface InputProps extends StandardTextFieldProps {
  placeHolder: string;
  value: string | null | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextField = styled(TextField)(() => ({
  borderRadius: 1,
  border: "#D0D5DD",
  "&:hover": {
    borderColor: "black !important",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    color: "black",
    input: {
      height: "15px",
    },
    borderRadius: "8px",
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderRadius: "8px",
    },
  },
}));

const InputField = (props: InputProps) => {
  return (
    <FormControl data-testid="input" fullWidth>
      <StyledTextField
        fullWidth
        inputProps={props.inputProps}
        placeholder={props.placeHolder}
        data-testid="textinputfield"
        id="textinputfield"
        value={props.value}
        onChange={props.handleChange}
      ></StyledTextField>
    </FormControl>
  );
};
export default InputField;

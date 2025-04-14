/* eslint-disable no-unused-vars */
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import { StandardTextFieldProps, styled } from "@mui/material";

interface InputProps extends StandardTextFieldProps {
  placeHolder: string;
  value: string;
  handlePasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledFormControl = styled(FormControl)({
  borderRadius: 1,
  "&:hover": {
    borderColor: "black",
    borderRadius: "8px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    color: "black",
    input: {
      height: "15px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderRadius: "8px",
    },
  },
});

const Passwordfield = (props: InputProps) => {
  const [password, showPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    showPassword(!password);
  };

  return (
      <FormControl data-testid="input" fullWidth>
        <StyledFormControl variant="outlined">
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            placeholder={props.placeHolder}
            type={password ? "text" : "password"}
            value={props.value}
            onChange={props.handlePasswordChange}
            data-testid="user-password"
            endAdornment={
              <InputAdornment position="end" data-testid="show-password">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  data-testid={"visibility"}
                >
                  {password ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </StyledFormControl>
      </FormControl>
  );
};

export default Passwordfield;

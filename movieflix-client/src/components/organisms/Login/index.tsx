import { useLazyQuery } from "@apollo/client";
import { Box, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../theme/theme";
import ButtonComponent from "../../atoms/Button";
import InputField from "../../atoms/InputField";
import Passwordfield from "../../atoms/PasswordField";
import Text from "../../atoms/Typography";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Illustration from "../../atoms/Illustration";
import { GET_LOGIN } from "../../../utils/queries";

const ParentGrid = styled(Grid)({
  gap: "32px",
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const InputGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "center",
});

const LoginButton = styled(ButtonComponent)({
  padding: "8px",
  borderRadius: "4px",
  backgroundColor: "#a80c2e",
  color: theme.palette.grey[400],
  "&.Mui-disabled": {
    background: "#520307",
    color: "grey",
  },
});

const Container = styled(Box)({
  backgroundColor: theme.palette.grey[400],
  borderRadius: "8px",
  display: "flex",
  padding: "24px",
  alignItems: "center",
  flexDirection: "column",
  marginRight: "15vw",
  width: "30%",
});

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, { error, data }] = useLazyQuery(GET_LOGIN);

  const validateName = () => {
    return String(name).match(/^[a-zA-Z][a-zA-Z\s]*$/);
  };

  const validatePassword = () => {
    return String(password).match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    );
  };

  const validateUserDetails = () => {
    return validateName() && validatePassword();
  };

  const validateLogin = async () => {
    await login({
      variables: { name, password },
    });
  };

  if (data) {
    const token = data.login;
    localStorage.setItem("token", token);
    navigate("/movies");
  }

  return (
    <Container>
      <Illustration source={logo} alt="logo" />
      <ParentGrid container>
        <Grid item>
          <Text variant="h1" color={theme.palette.primary[600]}>
            {error ? "Something went wrong Sign In Again" : "Sign In"}
          </Text>
        </Grid>
        <Grid item>
          <InputGrid container>
            <Grid item>
              <InputField
                placeHolder={"Enter Your Username"}
                value={name}
                handleChange={(e) => {
                  setName(e.target.value);
                  validateUserDetails();
                }}
                data-testid="user-name"
              />
            </Grid>
            <Grid item>
              <Passwordfield
                placeHolder={"Enter Your Password"}
                value={password}
                handlePasswordChange={(e) => {
                  setPassword(e.target.value);
                  validateUserDetails();
                }}
              />
            </Grid>
            <Grid item>
              <LoginButton
                fullWidth
                label={"continue"}
                variant={"contained"}
                textVariant={"h3"}
                disabled={validateUserDetails() ? false : true}
                data-testid="continue-button"
                onClick={validateLogin}
              ></LoginButton>
            </Grid>
          </InputGrid>
        </Grid>
      </ParentGrid>
    </Container>
  );
}

export default Login;

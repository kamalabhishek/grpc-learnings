import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme/theme";
import ButtonComponent from "../../atoms/Button";
import Illustration from "../../atoms/Illustration";
import logo from '../../../assets/logo.png'
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

const TopGrid = styled(Grid)({
  backgroundColor: theme.palette.grey[400],
  justifyContent: "space-between",
  flexFlow: "no-wrap",
  alignItems: "center",
  padding: "20px 24px",
});

const ParentGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
});

const CustomButton = styled(ButtonComponent)({
  padding: "8px",
  borderRadius: "4px",
  textTransform: "none",
  height: "36px",
  backgroundColor: theme.palette.primary.main,
  "&.Mui-disabled": {
    background: "#9b8ead",
  },
});

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate('/')
  };

  return (
    <TopGrid container data-testid="header">
      <Grid item>
        <Illustration source={logo} alt="logo"/>
      </Grid>
      <ParentGrid item>
        <Grid item>
          <CustomButton
            label="Logout"
            variant="contained"
            textVariant="h3"
            onClick={logout}
            endIcon={<LogoutSharpIcon/>}
          />
        </Grid>
      </ParentGrid>
    </TopGrid>
  );
}

export default Header;

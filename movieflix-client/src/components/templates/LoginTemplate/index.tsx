import { Box, styled } from "@mui/material";
import React from "react";
import movie from '../../../assets/movieflix.jpg'

interface LoginTemplateProps {
  content: React.ReactNode;
}

const TemplateContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  backgroundImage: `url(${movie})`,
  flexDirection: "row",
  height: "100vh",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow:'hidden',
  zIndex:-1,
});

const LoginTemplate = (props: LoginTemplateProps) => {
  return (
    <TemplateContainer>
        {props.content}
    </TemplateContainer>
  );
};

export default LoginTemplate;

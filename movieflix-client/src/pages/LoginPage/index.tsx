import React from "react";
import LoginTemplate from "../../components/templates/LoginTemplate";
import Login from "../../components/organisms/Login";

export const LoginPage = () => {
  return <LoginTemplate content={<Login />} />;
};

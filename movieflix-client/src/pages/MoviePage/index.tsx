import React from "react";
import Header from "../../components/molecules/Header";
import TabsWithFilter from "../../components/organisms/Tabs";
import { Navigate } from "react-router-dom";
import ApplicationTemplate from "../../components/templates/ApplicationTemplate";

function MoviesPage() {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <ApplicationTemplate header={<Header />} content={<TabsWithFilter />} />
    );
  } else {
    return <Navigate to="/" />;
  }
}

export default MoviesPage;


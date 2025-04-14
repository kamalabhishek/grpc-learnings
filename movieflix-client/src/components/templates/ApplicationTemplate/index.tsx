import { Grid } from "@mui/material";
import React from "react";

interface ApplicationTemplateProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

const ApplicationTemplate = (props: ApplicationTemplateProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {props.header}
      </Grid>
      <Grid item xs={12}>
        {props.content}
      </Grid>
    </Grid>
  );
};

export default ApplicationTemplate;

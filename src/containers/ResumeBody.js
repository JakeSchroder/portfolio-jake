import * as React from "react";
import { Typography, Grid, Box, Paper, Card, Button } from "@mui/material";
import ResumeViewComponent from "../components/ResumeView";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { ResumePDF } from "../assets/global/FileVariables";

export default function ResumeBody({ theme }) {
  return (
    <Grid id="resumeBody" container>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "solano-gothic-pro-mvb, sans-serif",
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          <b>Resume</b>
        </Typography>
      </Grid>
      <Grid container display="flex" justifyContent="center">
        <Button
          href={ResumePDF}
          download={true}
          color="inherit"
          startIcon={<ArrowCircleDownIcon />}
          sx={{ right: "-14%" }}
        >
          Download
        </Button>
        <Grid container display="flex" justifyContent="center">
          <Card sx={{ border: 20, borderColor: theme.palette.secondary.dark }}>
            <ResumeViewComponent sx={{ border: 20 }} />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

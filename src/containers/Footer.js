import * as React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer({ colorMode, theme }) {
  return (
    <Grid container justifyContent="center">
      <hr
        width="75%"
        color={
          colorMode === "light"
            ? theme.palette.secondary.dark
            : theme.palette.primary.contrastText
        }
      />
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            fontFamily: "solano-gothic-pro-mvb, sans-serif",
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          <b>Jake.Schroder@gmail.com</b>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={30}
      >
        <IconButton
          size="large"
          target="_blank"
          href="https://github.com/JakeSchroder"
        >
          <GitHubIcon
            fontSize="inherit"
            sx={{ fill: theme.palette.secondary.light }}
          />
        </IconButton>
        <IconButton
          size="large"
          target="_blank"
          href="https://www.linkedin.com/in/jakeschroder/"
        >
          <LinkedInIcon
            fontSize="inherit"
            sx={{ fill: theme.palette.secondary.light }}
          />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={20}
      >
        <Typography
          sx={{
            fontFamily: "solano-gothic-pro-mvb, sans-serif",
            fontWeight: "500",
            fontStyle: "normal",
          }}
        >
          <b>Jake Schroder, 2022. All Rights Reserved</b>
        </Typography>
      </Grid>
    </Grid>
  );
}

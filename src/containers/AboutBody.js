import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import ProfilePic from "../components/ProfilePic";
import TechIcons from "../components/TechIcons";
import AboutBodyText from "../components/AboutBodyText";

export default function AboutBody({ theme, isMobile }) {
  return (
    <Grid
      id="aboutBody"
      container
      elevation={0}
      justifyContent="space-between"
      display="flex"
      sx={{ paddingTop: "3%", paddingRight: 10 }}
    >
      <ProfilePic theme={theme} isMobile={isMobile} />
      {!isMobile && <TechIcons theme={theme} />}
      <AboutBodyText theme={theme} isMobile={isMobile} />
    </Grid>
  );
}

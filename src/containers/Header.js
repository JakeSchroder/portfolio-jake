import React, { useState, useEffect, useCallback } from "react";
import { Grid, Toolbar, Button, IconButton, keyframes } from "@mui/material";
import MessageFormComponent from "../components/MessageForm";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-scroll";

export default function Header({ colorMode, setColorMode, theme }) {
  const [clicked, setClicked] = useState(false);
  const rotateScaleUp = keyframes`
        0% {
            transform: scale(1) rotateZ(0);
        }
        50% {
            transform: scale(.75) rotateZ(180deg);
        }
        100% {
            transform: scale(1) rotateZ(360deg);
        }`;

  const toggleDarkMode = () => {
    setClicked(true);
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    setTimeout(() => {
      setClicked(false);
    }, 500);
  };
  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.background.default
      : "inherit";
  return (
    <Grid container justifyContent="center" rowGap={0}>
      <Toolbar
        sx={{ backgroundColor: theme.palette.primary.dark, borderRadius: 30 }}
      >
        <Button aria-label="Move to about body" sx={{ color: textColor }}>
          <Link to="aboutBody" spy={true} smooth={true} offset={-90}>
            <b>About</b>
          </Link>
        </Button>
        <Button aria-label="Move to project body" sx={{ color: textColor }}>
          <Link to="projectBody" spy={true} smooth={true} offset={-230}>
            <b>Projects</b>
          </Link>
        </Button>
        <Button aria-label="Move to resume body" sx={{ color: textColor }}>
          <Link to="resumeBody" spy={true} smooth={true} offset={-90}>
            <b>Resume</b>
          </Link>
        </Button>
        <MessageFormComponent />
        <IconButton
          aria-label="Toggle light mode"
          size="large"
          onClick={toggleDarkMode}
          sx={{ animation: clicked ? `${rotateScaleUp} .5s linear both` : "" }}
        >
          {colorMode === "dark" ? (
            <Brightness7Icon
              fontSize="inherit"
              sx={{ fill: theme.palette.secondary.light }}
            />
          ) : (
            <Brightness4Icon
              fontSize="inherit"
              sx={{ fill: theme.palette.secondary.light }}
            />
          )}
        </IconButton>
      </Toolbar>
    </Grid>
  );
}

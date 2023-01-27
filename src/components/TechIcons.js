import { Grid, keyframes, Button } from "@mui/material";
import { ReactComponent as PythonIcon } from "../assets/icons/python.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as MongoIcon } from "../assets/icons/mongodb.svg";
import { ReactComponent as NodeIcon } from "../assets/icons/nodedotjs.svg";
import { ReactComponent as NGINXIcon } from "../assets/icons/nginx.svg";

export default function TechIcons({ theme }) {
  const pulsateForward = keyframes`
    0%{
        transform:scale(1)
    }
    50%{
        transform:scale(1.2)
    }
    100%{
        transform:scale(1)
    }`;
  const pulsateFwdAnime = `${pulsateForward} 10s ease-in-out infinite both`;
  const iconColor = theme.palette.secondary.light;
  return (
    <Grid
      item
      xs={1}
      display="flex"
      justifyContent="space-between"
      direction="column"
      position="relative"
      sx={{ left: -40, paddingBottom: 5, paddingRight: 20 }}
    >
      <Button
        href="https://www.python.org/"
        target="_blank"
        position="relative"
        sx={{
          left: -170,
          top: -30,
          backgroundColor: "transparent",
          animation: pulsateFwdAnime,
          animationDelay: "2s",
        }}
      >
        <PythonIcon fill={iconColor} />
      </Button>
      <Button
        href="https://reactjs.org/"
        target="_blank"
        position="relative"
        sx={{
          left: -70,
          top: -25,
          backgroundColor: "transparent",
          animation: pulsateFwdAnime,
          animationDelay: "4s",
        }}
      >
        <ReactIcon fill={iconColor} />
      </Button>
      <Button
        href="https://www.mongodb.com/"
        target="_blank"
        position="relative"
        sx={{
          left: -20,
          backgroundColor: "transparent",
          animation: pulsateFwdAnime,
        }}
      >
        <MongoIcon fill={iconColor} />
      </Button>
      <Button
        href="https://nodejs.org/en/"
        target="_blank"
        position="relative"
        sx={{
          left: -70,
          top: 30,
          backgroundColor: "transparent",
          animation: pulsateFwdAnime,
          animationDelay: ".75s",
        }}
      >
        <NodeIcon fill={iconColor} />
      </Button>
      <Button
        href="https://www.nginx.com/"
        target="_blank"
        position="relative"
        sx={{
          left: -170,
          top: 60,
          backgroundColor: "transparent",
          animation: pulsateFwdAnime,
          animationDelay: "3s",
        }}
      >
        <NGINXIcon fill={iconColor} />
      </Button>
    </Grid>
  );
}

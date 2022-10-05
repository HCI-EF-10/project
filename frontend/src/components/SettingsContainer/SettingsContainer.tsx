import React from "react";
import { Grid, Button, Box, Typography, IconButton } from "@mui/material";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { useNavigate } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import HTMLTooltip from "../HTMLTooltip/HTMLTooltip";

interface Props {
  menu: number;
  width: number;
  height: number;
  xSpacing: number;
  ySpacing: number;
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
  setXSpacing: (value: number) => void;
  setYSpacing: (value: number) => void;
}

function SettingsContainer({ menu, width, height, xSpacing, ySpacing, setWidth, setHeight, setXSpacing, setYSpacing}: Props) {
  const [clicks, setClicks] = React.useState(0);
  const [errors, setErrors] = React.useState(0);
  const [isEditMode, setIsEditMode] = React.useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const setEditMode = () => {
    setIsEditMode(true);
  };

  const setViewMode = () => {
    setIsEditMode(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#d4edfc",
        paddingTop: "2rem",
        paddingX: "1rem",
        height: "100vh",
      }}
    >
      <Box display="flex" flexDirection="row">
        <Typography variant="h2">Settings</Typography>
        <HTMLTooltip
          button={<HelpIcon />}
          htmlFrag={
            <div>
              <h1>Testing the hover functionality</h1>
              Switching over from custom hover to MUI tooltips wrapper for a
              cleaner look with less styling
            </div>
          }
        />
      </Box>
      <Typography variant="subtitle1" marginTop="0.25rem">
        Selected component: Menu {menu} item
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          marginTop: "4rem",
        }}
      >
        <Typography variant="h3" marginBottom="1rem">
          Component Properties
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <MenuSlider
            min={0}
            max={100}
            value={width}
            onChange={(width) => setWidth(width)}
            menuText="Width"
          />
          <MenuSlider
            min={0}
            max={100}
            value={height}
            onChange={(height) => setHeight(height)}
            menuText="Height"
          />
          <MenuSlider
            min={0}
            max={100}
            value={xSpacing}
            onChange={(xSpacing) => setXSpacing(xSpacing)}
            menuText="X Position"
          />
          <MenuSlider
            min={0}
            max={100}
            value={ySpacing}
            onChange={(ySpacing) => setYSpacing(ySpacing)}
            menuText="Y Position"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginY="4rem"
      >

        <Typography variant="h3">Number of clicks: {clicks}</Typography>
        <Typography variant="h3">Errors: {errors}</Typography>
      </Box>

      <Grid container justifyContent="space-evenly" padding="15px">
        {isEditMode ? (
          <Button variant="contained" onClick={setViewMode}>
            EDIT MODE
          </Button>
        ) : (
          <Button variant="contained" onClick={setEditMode}>
            VIEW MODE
          </Button>
        )}
        <Button variant="contained" onClick={handleNavigate}>
          RUN TEST
        </Button>
      </Grid>
    </Box>
  );
}

export default SettingsContainer;

import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import headerData from "./header.json";
import { theme } from "../../lib/theme";
import DesktopPxToVw from "../../utils/DesktopFontCalc";
const Header = () => {
  const { links, button } = headerData;
  return (
    <Box
      sx={{
        background: theme?.palette?.neuPalette?.hexOne,
      }}
    >
      <Grid
        border={"1px solid red"}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          padding: `${DesktopPxToVw(40)} ${DesktopPxToVw(100)}`,
        }}
      >
        <Grid item>
          <Box>
            <Typography fontWeight={"800"} variant="h-32">NK Alluminium</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={DesktopPxToVw(80)}
          >
            <Stack flexDirection={"row"} gap={DesktopPxToVw(40)}>
              {links?.map((list, index) => (
                <Typography
                  variant="b-24"
                  sx={{
                    color: theme?.palette?.neuPalette?.hexTwo,
                    fontWeight: 700,
                    cursor: "pointer",
                    position: "relative",
                    display: "inline-block",
                    "&:hover::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -2, // Adjust to increase or decrease the gap from the text
                      height: "4px", // Adjust this value to increase the thickness of the underline
                      backgroundColor: "currentColor", // Match the text color
                      transition: "bottom 0.3s ease",
                    },
                  }}
                  key={index}
                >
                  {list?.name}
                </Typography>
              ))}
            </Stack>
            <Button
              sx={{
                backgroundColor: theme?.palette?.neuPalette?.hexThirtyFour,
                borderRadius: "0vw",
                padding: `${DesktopPxToVw(10)} ${DesktopPxToVw(20)}`,
                color: theme?.palette?.neuPalette?.hexOne,
                "&:hover": {
                  backgroundColor: theme?.palette?.neuPalette?.hexThirtyFour,
                  color: theme?.palette?.neuPalette?.hexOne,
                },
              }}
            >
              {button?.text}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

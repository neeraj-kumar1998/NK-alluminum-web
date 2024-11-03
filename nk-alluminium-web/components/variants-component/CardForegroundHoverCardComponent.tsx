import { Box, Fade, Grid, Typography } from "@mui/material";
import { theme } from "../../lib/theme";
import DesktopPxToVw from "../../utils/DesktopFontCalc";

export const HoverCard = ({
  index,
  setActiveIndex,
  activeIndex,
  item,
}: any) => {
  const cardTextColor = theme?.palette?.neuPalette?.hexSeventeen;

  return (
    <Grid
      sx={{
        height: "auto",
        display: "flex",
        cursor: "default",
        alignItems: "flex-end",
        justifyContent: "center",
        borderRight: "1px solid #FFFFFF",
      }}
      item
      xl={3}
      lg={3}
      md={3}
      sm={3}
      key={index}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(activeIndex)}
    >
      {index === activeIndex ? (
        <Fade
          in={index === activeIndex}
          timeout={{ enter: 1000, appear: 1000, exit: 1000 }}
        >
          <Box
            sx={{
              background: theme?.palette?.background?.default,
              opacity: `${0.85} !important`,
              width: "100%",
              display: "flex",
              textAlign: "center",
              height: "100%",
              alignItems: "center",
              padding: "0vw 2.125vw",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {item?.title && (
              <Typography
                variant="h-32"
                component={item?.headingElementForCard || "h3"}
                color={cardTextColor}
              >
                {item?.title}
              </Typography>
            )}
            {item?.description && (
              <Typography
                variant="b-22"
                color={cardTextColor}
                sx={{
                  mt: "2.083vw",
                }}
              >
                {item?.description}
              </Typography>
            )}
          </Box>
        </Fade>
      ) : (
        <>
          {item?.title && (
            <Typography
              variant="h-32"
              color={theme?.palette?.neuPalette?.hexOne}
              component={item?.headingElementForCard || "h3"}
              sx={{
                mb: "2.083vw",
                display: "flex",
                textAlign: "center",
                padding: `0vw ${DesktopPxToVw(22)}`,
              }}
            >
              {item?.title}
            </Typography>
          )}
        </>
      )}
    </Grid>
  );
};

import React, { useRef } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import { Box, Divider, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomNextArrow = dynamic(() =>
  import("../hoc/custom-arrows").then((module) => module.CustomNextArrow)
);
const CustomPrevArrow = dynamic(() =>
  import("../hoc/custom-arrows").then((module) => module.CustomPrevArrow)
);
import { CommonCarouselStyles } from "../hoc/carousal-component-styles";
import { ICONS } from "../constants";
import { useMobileCheck } from "../../utils/mobile-check/MobileCheck";
import CardWithCtaLabel from "./CardWithCtaLabel";
import DesktopPxToVw from "../../utils/DesktopFontCalc";
import { theme } from "../../lib/theme";

const GroupCarousalWithArrows = ({ items }: any) => {
  const isMobile = useMobileCheck();
  const imgRef: any = useRef(null);
  const imgElements = imgRef.current?.getElementsByTagName("img");
  const imgHeights: number[] = [];
  if (imgElements) {
    Array?.from(imgElements).forEach((item: any) => {
      item.onload = () => {
        const height = item?.clientHeight;
        imgHeights.push(height);
      };
    });
  }
  const maxImgHeight = Math.max(...imgHeights);
  const arrowPosition = maxImgHeight / 2 || 0;
  const settings = {
    centerMode: false,
    arrows: isMobile ? false : true,
    autoplay: isMobile ? true : false,
    infinite: items?.length > 3 ? true : false,
    speed: 650,
    initialSlide: 0,
    autoplaySpeed: 3000,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1.1 : 1,
    prevArrow: (
      <CustomPrevArrow
        items={items}
        cssData={{
          top: arrowPosition > 0 ? `${arrowPosition}px` : "45%",
          left: "4.16vw",
          width: "3.125vw",
          height: "3.125vw",
          borderRadius: "50%",
          background: `url(${ICONS?.TRANSPARENT_ARROW_LEFT}) no-repeat`,
        }}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        items={items}
        cssData={{
          top: arrowPosition > 0 ? `${arrowPosition}px` : "45%",
          right: "4.16vw",
          width: "3.125vw",
          height: "3.125vw",
          borderRadius: "50%",
          background: `url(${ICONS?.TRANSPARENT_ARROW_RIGHT}) no-repeat`,
        }}
      />
    ),
  };

  return (
    <Box sx={{ width: "100%", mt: DesktopPxToVw(60) }} ref={imgRef}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "0vw 10vw",
          alignItems: "center",
          mb: DesktopPxToVw(40),
        }}
      >
        <Stack>
          <Stack
            alignItems={"center"}
            flexDirection={"row"}
            gap={DesktopPxToVw(40)}
          >
            <Divider
              sx={{
                width: DesktopPxToVw(80),
                background: theme?.palette?.neuPalette?.hexTwo,
              }}
            />
            <Typography variant="h-60">Explore</Typography>
          </Stack>

          <Typography variant="h-60"> More Services</Typography>
        </Stack>
        <Typography
          sx={{
            maxWidth: DesktopPxToVw(700),
          }}
          variant="b-22"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          nihil voluptatem distinctio porro deleniti saepe fugit autem iste
        </Typography>
      </Stack>
      <CommonCarouselStyles
        sx={{
          ".slick-slider": {
            overflow: "hidden",
          },
          ".slick-slide": {
            padding: "0 1.04vw",
          },
          ".slick-list": {
            margin: "0 -8.04vw",
          },
          ".slick-track": {
            marginBottom: "0.729vw",
          },
        }}
      >
        <Slider {...settings}>
          {items?.map((item: any, index: number) => (
            <Box key={index}>
              <CardWithCtaLabel {...item} />
            </Box>
          ))}
        </Slider>
      </CommonCarouselStyles>
    </Box>
  );
};

export default GroupCarousalWithArrows;

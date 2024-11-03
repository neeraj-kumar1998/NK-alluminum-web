import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CommonCarouselStyles } from "../hoc/carousal-component-styles";
import { ICONS } from "../constants";
import dynamic from "next/dynamic";
import { Box, Button, Stack } from "@mui/material";
import { theme } from "../../lib/theme";
import { useMobileCheck } from "../../utils/mobile-check/MobileCheck";
import DesktopPxToVw, { MobilePxToVw } from "../../utils/DesktopFontCalc";
import AnimatedText from "../hoc/AnimatedText";
const CustomNextArrow = dynamic(() =>
  import("../hoc/custom-arrows").then((module) => module.CustomNextArrow)
);
const CustomPrevArrow = dynamic(() =>
  import("../hoc/custom-arrows").then((module) => module.CustomPrevArrow)
);
const HeroBanner = () => {
  const fullScreenImageWidth = true;
  const isMobile = useMobileCheck();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: (
      <CustomPrevArrow
        cssData={{
          top: "45%",
          left: "4.5vw",
          width: "3.125vw",
          height: "3.125vw",
          background: `url(${ICONS?.TRANSPARENT_ARROW_LEFT}) no-repeat`,
          borderRadius: "50%",
          boxShadow: "-0.31vw 0.52vw 1.25vw rgba(0, 0, 0, 0.1)",
        }}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        cssData={{
          top: "45%",
          right: "4.5vw",
          width: "3.125vw",
          height: "3.125vw",
          background: `url(${ICONS?.TRANSPARENT_ARROW_RIGHT}) no-repeat`,
          borderRadius: "50%",
          boxShadow: "-0.31vw 0.52vw 1.25vw rgba(0, 0, 0, 0.1)",
        }}
      />
    ),
  };
  const bannerImage = [
    {
      image:
        "https://i.ibb.co/B2t0VDK/elena-mozhvilo-yy-Bzyi-GEh6s-unsplash.jpg",
      title: "Welcome to Our Website",
      description: "Discover amazing products and services",
    },
    {
      image:
        "https://i.ibb.co/B2t0VDK/elena-mozhvilo-yy-Bzyi-GEh6s-unsplash.jpg",
      title: "New Arrivals",
      description: "Check out the latest additions to our collection",
    },
    {
      image:
        "https://i.ibb.co/B2t0VDK/elena-mozhvilo-yy-Bzyi-GEh6s-unsplash.jpg",
      title: "Limited Time Offer",
      description: "Grab the best deals while they last!",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        {bannerImage && (
          <>
            <Box position={"relative"} width={"100%"}>
              <CommonCarouselStyles>
                <Slider {...settings}>
                  {bannerImage?.map((item: any, index: number) => (
                    <Fragment key={index}>
                      {fullScreenImageWidth ? (
                        <Box
                          display={"block"}
                          width={"100%"}
                          height={"100vh"}
                          className="hero-banner"
                          sx={{
                            backgroundImage: `url(${item?.image} )`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></Box>
                      ) : (
                        <Box key={index} display={"block!important"}>
                          <Box
                            sx={{
                              visibility: "visible",
                            }}
                            display={"block"}
                            alt={`-img`}
                            width={"100%"}
                            height={"100%"}
                            loading="lazy"
                            component={"img"}
                            src={item?.image}
                          />
                        </Box>
                      )}
                    </Fragment>
                  ))}
                </Slider>
              </CommonCarouselStyles>
              <Stack
                sx={{
                  position: "absolute",
                  top: "30%",
                  paddingLeft: DesktopPxToVw(200),
                  rowGap: DesktopPxToVw(20),
                }}
              >
                <Stack
                  maxWidth={isMobile ? MobilePxToVw(400) : DesktopPxToVw(600)}
                  rowGap={DesktopPxToVw(20)}
                >
                  <AnimatedText
                    color={`${theme?.palette?.neuPalette?.hexOne}`}
                    fontSize={`${DesktopPxToVw(40)}`}
                  >
                    We Are Best Services Aluminum & Glass
                  </AnimatedText>

                  <AnimatedText
                    color={`${theme?.palette?.neuPalette?.hexOne}`}
                    fontSize={`${DesktopPxToVw(18)}`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi totam ex obcaecati delectus? Inventore, eligendi.
                    Consectetur consequuntur, eaque at, voluptates optio nobis
                    provident distinctio enim libero pariatur minus
                    reprehenderit dolores?
                  </AnimatedText>
                </Stack>
                <Button
                  sx={{
                    width: "fit-content",
                    backgroundColor: theme?.palette?.neuPalette?.hexThirtyFour,
                    borderRadius: "0vw",
                    padding: `${DesktopPxToVw(10)} ${DesktopPxToVw(20)}`,
                    color: theme?.palette?.neuPalette?.hexOne,
                    "&:hover": {
                      backgroundColor:
                        theme?.palette?.neuPalette?.hexThirtyFour,
                      color: theme?.palette?.neuPalette?.hexOne,
                    },
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default HeroBanner;

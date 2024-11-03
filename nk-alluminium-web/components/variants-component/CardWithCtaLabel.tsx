import React, { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { CardMedia, Typography, useTheme, Box } from "@mui/material";
import { useMobileCheck } from "../../utils/mobile-check/MobileCheck";
import {
  ActionBox,
  CardMediaImageContent,
  ContentBox,
  StyledChevronRight,
} from "./styles/CardWithCtaLabelStyles";

const CardWithCtaLabel = ({
  title,
  image,
  subTitle,
  largeImage,
  primaryAction,
  variant,
  largeVariant,

  headingElementForCard,

  maxheight,
  setTitleHeight,
  buttonTitle,
}: any) => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMobileCheck();

  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
        aria-label={"CardWithCta"}
      >
        <CardMediaImageContent>
          <CardMedia
            alt={"media"}
            component="img"
            loading="lazy"
            width={"100%"}
            height={"100%"}
            src={image}
          />
        </CardMediaImageContent>
        <ContentBox
          sx={{
            background: theme?.palette?.neuPalette?.hexOne,
          }}
        >
          {title && (
            <Typography
              variant={"b-24"}
              sx={{
                color: theme?.palette?.text?.primary,
                height: maxheight ? maxheight : "auto",
              }}
              component={headingElementForCard || "h3"}
            >
              {title}
            </Typography>
          )}
          {subTitle && (
            <Box mt={"0.73vw"}>
              <Typography
                variant={"b-14"}
                sx={{
                  color: theme?.palette?.text?.primary,
                }}
              >
                {subTitle}
              </Typography>
            </Box>
          )}
          {buttonTitle && (
            <ActionBox>
              <Typography
                variant={"b-18"}
                sx={{
                  letterSpacing: "1.8px",
                  textDecoration: "underline",
                  color: theme?.palette?.neuPalette?.hexTen,
                }}
              >
                {buttonTitle}
              </Typography>
              <StyledChevronRight />
            </ActionBox>
          )}
        </ContentBox>
      </Box>
    </>
  );
};

export default CardWithCtaLabel;

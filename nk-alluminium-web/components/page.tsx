import React, { Fragment } from "react"
import { Box, Typography } from "@mui/material"
import { useMobileCheck } from "../utils/mobile-check/MobileCheck"
import { useVariantContext } from "../context/variantContext"
import HeroBanner from "./hero-banner/HeroBanner"

const variantComponents: { [key: string]: React.FC<any> } = {
  "hero-banner": HeroBanner,
}

const PageComponent: React.FC = (props: any) => {
  const { variants } = useVariantContext()
  const isMobile = useMobileCheck()
  const pageBackgroundImage = isMobile
    ? props?.mobileBackgroundImage
    : props?.backgroundImage
  return (
    <Box
      sx={{
        width: "100%",
        height: props?.BackgroundColor?.hex ? "auto" : "100%",
        backgroundImage: pageBackgroundImage ? pageBackgroundImage : "",
        backgroundRepeat: "no-repeat",
        backgroundColor: props?.BackgroundColor?.hex,
        backgroundSize: props?.BackgroundColor?.hex ? "contain" : "cover",
        backgroundPosition: props?.BackgroundColor?.hex ? "top" : "center",
        position: "relative",
      }}>
      {variants.map((variant: any, index: number) => {
        const Component = variantComponents[variant.variant]
        return (
          <Fragment key={index}>
            {Component ? (
              <Component {...variant.props} />
            ) : (
              <Typography variant="h1">Variant not found</Typography>
            )}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default PageComponent

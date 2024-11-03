import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { HoverCard } from "./CardForegroundHoverCardComponent";
import DesktopPxToVw from "../../utils/DesktopFontCalc";
import ScrollRevealComponent from "../hoc/ScrollRevealComponent";
import AnimatedText from "../hoc/AnimatedText";

const CardWithHover = (props: any) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const [loadedBgImgs, setLoadedBgImgs] = useState<string[]>([]);

  useEffect(() => {
    const preloadedImages: HTMLImageElement[] = props?.items?.map(
      (list: any) => {
        const imgUrl = list?.image;
        const img = new Image();
        img.src = imgUrl || "";
        return img;
      }
    );
    Promise.all(
      preloadedImages?.map(
        (image) => new Promise((resolve) => (image.onload = resolve))
      )
    ).then(() => setLoadedBgImgs(preloadedImages?.map((image) => image.src)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        padding: `${DesktopPxToVw(50)} ${DesktopPxToVw(200)}`,
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          gap: DesktopPxToVw(20),
          mb: DesktopPxToVw(30),
        }}
      >
        <ScrollRevealComponent>
          <AnimatedText>A Trendy Woodwork for Trendy Home</AnimatedText>
        </ScrollRevealComponent>
        <ScrollRevealComponent>
          <AnimatedText
            fontSize={DesktopPxToVw(18)}
            customStyles={{
              maxWidth: DesktopPxToVw(750),
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi
            totam ex obcaecati delectus? Inventore, eligendi.Consectetur
            consequuntur, eaque at, voluptates optio nobi provident distinctio
            enim libero pariatur minu reprehenderit dolores
          </AnimatedText>
        </ScrollRevealComponent>
      </Stack>
      <Grid
        aria-label="card-with-hover"
        container
        sx={{
          background: `#333 url("${
            loadedBgImgs[activeIndex ? activeIndex : 0] || ""
          }") no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transitionDuration: "0.6s !important",
          transitionTimingFunction: "ease-in-out",
          transition: "ease-in-out",
          minHeight: "32.29vw",
        }}
      >
        {props?.items?.map((item: any, index: number) => (
          <HoverCard
            key={index}
            index={index}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            item={item}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default CardWithHover;

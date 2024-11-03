import { Typography } from "@mui/material";

export function CustomPrevArrow(props: any) {
  const {
    className,
    style,
    onClick,
    cssData,
    isPrev = true,
    prevArrowTitle,
    items,
    disabled = false,
  } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        ...cssData,
        display: disabled ? "none" : "flex",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        backgroundSize: "contain",
      }}
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isPrev && onClick();
        // handleLeftSwipe();
      }}
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          minWidth: "13vw",
          textAlign: "left",
          marginLeft: "18vw",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        {prevArrowTitle}
      </Typography>
    </div>
  );
}
export function CustomNextArrow(props: any) {
  const {
    className,
    style,
    onClick,
    cssData,
    isNext = true,
    nextArrowTitle,
    items,
    disabled,
  } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        ...cssData,
        display: disabled ? "none" : "flex",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        backgroundSize: "contain",
      }}
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isNext && onClick();
        // handleRightSwipe()
      }}
    >
      <Typography
        // variant="heading-xs"
        sx={{
          width: "11vw",
          color: "#FFFFFF",
          textAlign: "right",
          whiteSpace: "normal",
          marginLeft: "-16.33vw",
          wordWrap: "break-word",
        }}
      >
        {nextArrowTitle}
      </Typography>
    </div>
  );
}

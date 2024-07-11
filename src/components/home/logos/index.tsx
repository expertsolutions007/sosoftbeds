import { LogoPaper, Rad } from "./logo.styles";
import theme from "../../../theme";
import { memo } from "react";
import { Box, styled } from "@mui/material";

export const SliderBox = styled(Box)({
  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.125)",
  height: "100px",
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  "&::before, &::after": {
    content: '""',
    height: "100px",
    position: "absolute",
    width: "200px",
    zIndex: 2,
  },

  "&::after": {
    right: 0,
    top: 0,
    transform: "rotateZ(180deg)",
  },

  "&::before": {
    left: 0,
    top: 0,
  },
});
export const SliderTrack = styled(Box)({
  animation: "scroll 25s linear infinite",
  display: "flex",
  width: "calc(250px * 58)",
});
export const Slide = styled(Box)({
  height: "100px",
  width: "250px",
});

const LogoSlider = memo(({ data }: any) => {
  const logos = [
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19730.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19729.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19758.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19757.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19755.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19756.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19754.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19752.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19753.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19751.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19750.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19749.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19747.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19748.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19746.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19745.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19743.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19741.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19742.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19740.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19739.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19737.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19738.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19736.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19735.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19733.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19734.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19732.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19731.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19730.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19729.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19758.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19757.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19755.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19756.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19754.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19752.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19753.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19751.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19750.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19749.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19747.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19748.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19746.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19745.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19743.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19741.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19742.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19740.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19739.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19737.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19738.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19736.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19735.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19733.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19734.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19732.png",
    "https://narsun.s3.eu-central-1.amazonaws.com/Group+19731.png",
  ]; // Replace with your logo images

  return (
    <LogoPaper theme={theme}>
      {/* <style>
        {`.slick-prev,
            .slick-next {
              display: none !important;
            }
          `}
      </style> */}
      <Rad id="slider">
        <SliderBox className="slider">
          <SliderTrack className="slide-track">
            {logos.map((image, index) => (
              <Slide className="slide">
                <img src={image} height="100" width="250" alt="" />
              </Slide>
            ))}
          </SliderTrack>
        </SliderBox>
      </Rad>
    </LogoPaper>
  );
});
export default LogoSlider;

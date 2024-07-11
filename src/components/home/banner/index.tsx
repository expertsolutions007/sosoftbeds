import {
  BannerBox,
  Heading,
  InnerBox,
  PDiv,
  SubHeading,
} from "./banner.styles";
import { FC, ReactElement, useEffect, useState } from "react";
import theme from "../../../theme";
import { Container } from "@mui/material";

export const Banner: FC = ({ data }: any): ReactElement => {
  const [width, setWidth]: any = useState("lg");

  useEffect(() => {
    onLoadSizeCheck();

    function handleResize() {
      if (innerWidth > 1280) {
        setWidth("lg");
      } else if (innerWidth >= 940) {
        setWidth("md");
      } else if (innerWidth >= 600) {
        setWidth("sm");
      } else if (innerWidth < 600) {
        setWidth("mb");
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  function onLoadSizeCheck() {
    if (innerWidth > 1280) {
      setWidth("lg");
    } else if (innerWidth >= 940) {
      setWidth("md");
    } else if (innerWidth >= 600) {
      setWidth("sm");
    } else if (innerWidth < 600) {
      setWidth("mb");
    }
  }

  return (
    <PDiv>
      <Container maxWidth={width} className="parent">
        <BannerBox id="banner" theme={theme}>
          <InnerBox theme={theme}>
            <Heading variant="h3" theme={theme}>
              2016
            </Heading>
            <SubHeading theme={theme}>Established Since</SubHeading>
          </InnerBox>
          <InnerBox theme={theme}>
            <Heading variant="h3" theme={theme}>
              500
            </Heading>
            <SubHeading theme={theme}>Clients</SubHeading>
          </InnerBox>
          <InnerBox theme={theme}>
            <Heading variant="h3" theme={theme}>
              1000+
            </Heading>
            <SubHeading theme={theme}>Projects</SubHeading>
          </InnerBox>
        </BannerBox>
      </Container>
    </PDiv>
  );
};

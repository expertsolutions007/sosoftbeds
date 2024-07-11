import { FC, ReactElement, memo, useEffect, useState } from "react";
import theme from "../../../theme";
import { Container } from "@mui/material";
import WorkBox from "./workflowboxes";
import { flows } from "./data/flows";
import {
  FlexBox,
  FullBox,
  Heading,
  HeadingBox,
  HeadingFlexBox,
  Liner,
  PDiv,
  Subheading,
  WorkFlowBox,
} from "./workflow.styles";

const Workflow = memo(({ data, content,lang }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset + 400;

      const boxElements = document.querySelectorAll(".scroll-box");
      let newIndex = 0;
      for (let i = 0; i < boxElements.length; i++) {
        // @ts-ignore
        const boxTop = boxElements[i].offsetTop;

        if (scrollTop >= boxTop) {
          newIndex = i;
        }
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let vlineHeight = document.getElementById("v-line")?.scrollHeight;
  useEffect(() => {
    // console.log("UseEffect WorkFlow");
    // console.log("FkexboxLIne", document.getElementById("v-line")?.scrollHeight);
  }, []);
  return (
    <PDiv lang={lang}>
      <Container
        maxWidth={width}
        className="parent"
        style={{ height: "100%", marginBottom: "100px" }}
      >
        <FullBox theme={theme}>
          <HeadingBox theme={theme}>
            <HeadingFlexBox theme={theme}>
              <Heading theme={theme} variant="h3">
                {content?.title1}
              </Heading>
              <Heading theme={theme} variant="h3">
                {content?.title2}
              </Heading>
              <Subheading theme={theme} variant="h6">
                {content?.subtitle}
              </Subheading>
            </HeadingFlexBox>

            <Liner style={{ height: vlineHeight && vlineHeight - 100 }} />
            <FlexBox id="v-line" theme={theme}>
              {content?.processes?.map((flow:any, index:any) => {
                const active = index == activeIndex ? true : false;
                return (
                  <WorkFlowBox
                    key={index}
                    theme={theme}
                    check={index == activeIndex}
                  >
                    <WorkBox
                      heading={flow?.title}
                      image={flow?.image}
                      content={flow?.content}
                      check={activeIndex}
                      active={active}
                      length={content?.processes?.length}
                      index={index}
                      fade={flow?.fade}
                    />
                  </WorkFlowBox>
                );
              })}
            </FlexBox>
            {/* <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginLeft:-0.2,
            marginTop:-4,
          }}>
            <div
              style={{
                width: "2px",
                backgroundColor: "white",
                color: "white",
                zIndex: 100,
              }}
            >
              &nbsp;
            </div>
          </div> */}
          </HeadingBox>
        </FullBox>
      </Container>
    </PDiv>
  );
});

export default Workflow;

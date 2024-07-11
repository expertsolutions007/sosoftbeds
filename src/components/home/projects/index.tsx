import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { ButtonImage } from "../expertise/Collapsible/collapsible.styles";
import { Container } from "@mui/material";

import {
  FullBox,
  Heading,
  HeadingFlexBox,
  Subheading,
  ExploreBox,
  ExploreButton,
  OuterHeadingBox,
  TopHeadingBox,
  ProjectImage,
  ProjectDataBox,
  BoxMarginTop,
  BoxFlex,
  ExploreSmButton,
  PContainer,
  SContainer,
  MovingButton,
} from "./projects.styles";
import { Downed, ProjectDowned } from "../carousel/carousel.styles";

type Images = {
  image: string;
  bg: string;
};
type Projects = {
  name: string;
  data: Images[];
};

interface IProjects {
  data: Projects[];
}

const Projects = ({ data, content }: any): any => {
  const [backImage, setBackImage] = useState(data[0].data[0].bg);
  const scrollableDivRef: any = useRef(null);
  const [projectData, setprojectData] = useState(data[0].data);
  const [projectTabsData, setprojectTabsData] = useState(data);
  const [hover, setHover] = useState([]);
  const [width, setWidth]: any = useState("lg");
  const [currentPosition, setCurrentPosition] = useState(2);
  const [arrowDisable, setArrowDisable] = useState(true);
  const [lastProjectInView, setLastProjectInView] = useState(false);
  // let lastProjectInView = null;

  useEffect(() => {
    handleExpand(0);
  }, []);

  useEffect(() => {
    // console.log("UseEffect Projects");
  }, []);

  // const interval = setInterval(() => {
  //   const projecting: Element | null =
  //     document.querySelector(".scroll-container");
  //   projecting.scrollLeft += 100;
  // }, 2000);

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

  const cursorChange = (event: any) => {
    event.preventDefault();
    const box = document.getElementById("projectbox");
    // console.log("box enter", box);
  };

  // const scrollBack = () => {
  //   var scroll: any = scrollableDivRef.current?.parentNode;
  //   // console.log(scroll);
  //   if (scroll) {
  //     scroll.scrollLeft -= 350; // Adjust the value as needed
  //   }
  // };

  // const scrollForward = () => {
  //   var scroll: any = scrollableDivRef.current?.parentNode;
  //   // console.log(scroll);
  //   if (scroll) {
  //     scroll.scrollLeft += 350; // Adjust the value as needed
  //   }
  // };

  function changeBackground(image: string) {
    setBackImage(image);
  }

  // function changeProjectdata(data: any) {
  //   setprojectData(data);
  // }

  const handleExpand = (index: number) => {
    var arr: any = new Array();
    for (var i = 0; i < data.length; i++) {
      arr[i] = false;
    }
    arr[index] = true;
    setHover(arr);
  };
  const scrollToNext = () => {
    const nextPosition = currentPosition + 1;
    if (scrollableDivRef.current?.children[nextPosition]) {
      scrollableDivRef.current.children[nextPosition].scrollIntoView({
        behavior: "smooth",
      });
      setCurrentPosition(nextPosition);
    }
  };
  const handleHorizantalScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  // const scrollToPrevious = () => {
  //   let previousPosition;
  //   if (currentPosition === 5) {
  //     previousPosition = 2;
  //   } else {
  //     previousPosition = currentPosition - 1;
  //   }

  //   if (scrollableDivRef.current?.children[previousPosition]) {
  //     scrollableDivRef.current.children[previousPosition].scrollIntoView({
  //       behavior: "smooth",
  //     });
  //     setCurrentPosition(previousPosition);
  //   }
  // };
  function isInViewport(el: any) {
    const rect = el?.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  useEffect(() => {
    if (scrollableDivRef?.current) {
      scrollableDivRef?.current.addEventListener("scroll", (event: any) => {
        setLastProjectInView(
          isInViewport(
            scrollableDivRef?.current.children[
            scrollableDivRef?.current.children.length - 1
            ]
          )
        );
      });
    }
  }, [scrollableDivRef?.current]);

  return (
    <FullBox image={backImage} id="projects" className="parent">
      <Container maxWidth={width}>
        <HeadingFlexBox>
          <Subheading variant="h6">{content?.title}</Subheading>
          <TopHeadingBox>
            <OuterHeadingBox>
              <Heading variant="h3">{content?.heading}</Heading>
            </OuterHeadingBox>
            <ExploreBox>
              <ExploreButton href="/portfolio">
                {content?.subtitle}
                <ButtonImage
                  src={"https://narsun.s3.eu-central-1.amazonaws.com/hru.webp"}
                />
              </ExploreButton>
            </ExploreBox>
          </TopHeadingBox>
          <BoxMarginTop />
        </HeadingFlexBox>
      </Container>
      {/* <PContainer maxWidth={width}> */}
      <SContainer className="scroll-container">
        <BoxFlex ref={scrollableDivRef} id="swiper">
          {projectData.map((data: any, index: any) => (
            <ProjectDataBox
              id={`projectbox ${index}`}
              key={index}
              onClick={() => {
                changeBackground(data.bg);
              }}
              onMouseEnter={(event) => cursorChange(event)}
            >
              <ProjectImage src={data.image} />
            </ProjectDataBox>
          ))}
        </BoxFlex>
      </SContainer>
      {/* </PContainer> */}
      <Container maxWidth={width}>
        <ExploreBox>
          <ExploreSmButton href="/portfolio">
            View all projects
            <ButtonImage
              src={"https://narsun.s3.eu-central-1.amazonaws.com/hru.webp"}
            />
          </ExploreSmButton>
        </ExploreBox>
      </Container>
      <Container
        maxWidth={width}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <MovingButton
          onClick={() => {
            handleHorizantalScroll(scrollableDivRef.current, 25, 450, -470);
          }}
          disabled={arrowDisable}
        >
          <img
            height={"50px"}
            src={
              "https://narsun.s3.eu-central-1.amazonaws.com/Arrow+Left+(1).png"
            }
          />
        </MovingButton>
        <MovingButton
          onClick={() => {
            handleHorizantalScroll(scrollableDivRef.current, 25, 450, 470);
          }}
        >
          <img
            height={"50px"}
            src={
              "https://narsun.s3.eu-central-1.amazonaws.com/Arrow+Right+(1).png"
            }
          />
        </MovingButton>
        {/* {isInViewport(scrollableDivRef.current[-1])} */}
        <ProjectDowned
          style={{
            transform: lastProjectInView ? "rotate(270deg)" : "rotate(90deg)",
          }}
          className="#section07"
          src="https://narsun.s3.eu-central-1.amazonaws.com/scrr.gif"
        />
      </Container>
    </FullBox>
  );
};
export default Projects;

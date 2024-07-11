import { FC, ReactElement, useEffect, useState } from "react";
import { Collapsible } from "./Collapsible";
import { data } from "./data/data";
import { Container } from "@mui/material";
import {
  DrawerBox,
  DrawerDiv,
  FullBox,
  Heading,
  HeadingFlexBox,
} from "./expertise.styles";

const Expertise = ({ content,changeSelection,title,lang }:any) => {

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expandedData, setExpandedData] = useState([true, false, false]);

  const handleExpand = (index: number) => {
    let arr = [false, false, false];
    arr[index] = true;
    setExpandedData(arr);
  };

  const handleDown = () => {
    let arr = [false, false, false];
    setExpandedData(arr);
  };

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
    <FullBox id="expertise">
      <Container maxWidth={width}>
        <HeadingFlexBox>
          <Heading lang={lang} variant="h3">{title}</Heading>
        </HeadingFlexBox>
        <DrawerBox>
          <DrawerDiv checked={data.length > 5 ? false : true}>
            {content.map((datas: any, index: any) => (
              <Collapsible
                isexpanded={expandedData[index]}
                expanded={expandedData}
                heading={datas?.title}
                handleDown={() => {
                  handleDown();
                }}
                image={datas.image}
                description={datas.description}
                handleExpand={() => handleExpand(index)}
                index={index}
                key={index}
                explore={datas?.explore}
                changeSelection={changeSelection}
              />
            ))}
          </DrawerDiv>
        </DrawerBox>
      </Container>
    </FullBox>
  );
};
export default Expertise;

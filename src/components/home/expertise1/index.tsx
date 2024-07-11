import { FC, ReactElement, useEffect, useState } from "react";
import Upper from "./upper";
import beard from "../../../../public/Beard.png";
import {
  FullBox,
  HeadingBox,
  FullContainer,
  LeftBox,
  BeardBox,
  BeardImage,
} from "./expertise1.styles";
import { ShadowBox } from "./expertise1.styles";

const Expertise1 = ({ quote, changeSelection,content,lang }: any) => {
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
    <FullBox id="expertise1">
      <HeadingBox maxWidth={width}>
        <FullContainer>
          <LeftBox>
            {content.map((up:any, index:any) => (
              <Upper
                lang={lang}
                key={index}
                image={up.image}
                title={up.title}
                description={up.description}
                changeSelection={changeSelection}
                link={quote.link}
              />
            ))}
          </LeftBox>
          <Upper
            lang={lang}
            image={quote?.image}
            title={quote?.title}
            dragon={quote?.dragon}
            link={quote?.link}
            changeSelection={changeSelection}
          />
        </FullContainer>
      </HeadingBox>
      <ShadowBox />
      <BeardBox>
        <BeardImage src="https://narsun.s3.eu-central-1.amazonaws.com/Beardman+Re+edit.png" />
      </BeardBox>
    </FullBox>
  );
};
export default Expertise1;

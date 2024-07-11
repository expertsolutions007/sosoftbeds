import { Link } from "@mui/material";
import {
  BoxImage,
  Description,
  ImgContainer,
  InfoContainer,
  PBox,
  Title,
  Dragon,
  DragonBox,
  ShadowBox,
  CLink,
} from "./expertise1.upper.styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Upper({
  image,
  title,
  description,
  dragon,
  changeSelection,
  link,
  lang
}: any) {
  const [sBox, setSBox] = useState(false);
  const [pBox, setPBox] = useState(false);
  const router = useRouter();

  const setSelection = (event: any, data: any) => {
    changeSelection(event, data);
  };

  const activeSBox = () => {
    setSBox(true);
  };

  const activePBox = () => {
    setPBox(true);
  };

  const disablePBox = () => {
    setPBox(false);
  };

  const disableSBox = () => {
    // console.log("false");
    setSBox(false);
  };

  return (
    <CLink
      title={title}
      onClick={(e:any)=>{
        e.preventDefault(e);
        console.log("MOVING");
        router.push(title == "Get A Quote" ? "/#contact" : `/expertise?${title}`)}
      }
    >
      <PBox
        sBox={sBox}
        pBox={pBox}
        title={title}
        onClick={(event) => {
          setSelection(event, title);
        }}
        onMouseEnter={activePBox}
        onMouseLeave={disablePBox}
      >
        <ImgContainer title={title}>
          <BoxImage src={image} title={title} />
        </ImgContainer>
        <InfoContainer title={title} lang={lang}>
          {dragon ? (
            <DragonBox
              sBox={sBox}
              pBox={pBox}
              onMouseEnter={() => activeSBox()}
              onMouseLeave={() => disableSBox()}
            >
              <Dragon src={dragon} />
              {/* <ShadowBox pBox={pBox} sBox={sBox} /> */}
              <Title
                style={{ zIndex: 99, marginTop: "-100px" }}
                pBox={pBox}
                sBox={sBox}
                title={title}
              >
                {title}
              </Title>
            </DragonBox>
          ) : (
            ""
          )}
          {title && !dragon && (
            <Title pBox={pBox} sBox={sBox} title={title}>
              {title}
            </Title>
          )}
          {description && (
            <Description pBox={pBox} sBox={sBox}>
              {description}
            </Description>
          )}
        </InfoContainer>
      </PBox>
    </CLink>
  );
}

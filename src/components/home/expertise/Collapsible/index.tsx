import { ReactElement } from "react";
import {
  CardBox,
  CardCollapse,
  CollapsibleCard,
  CollapsibleContent,
  FlexBox1Image,
  TransformText,
  PBox,
  BackDiv,
  HeaderDiv,
  LeftDiv,
  RightDiv,
  Collapser,
  CollapseDiv,
  MoreBox,
  RightImg,
  LeftCont,
  TopBox,
  MorerBox,
  ELink,
  HTitle,
  DPara,
  Exp,
} from "./collapsible.styles";
import { useRouter } from "next/router";

interface IExpertise {
  heading?: string;
  description?: string;
  image: string;
  link?: string;
  expanded: any;
  handleExpand: (id: number | undefined) => void;
  isexpanded: boolean;
  handleDown: () => void;
  index: number;
  changeSelection: () => void;
}

export const Collapsible = ({
  heading,
  description,
  image,
  explore,
  link,
  isexpanded,
  handleExpand,
  index,
  handleDown,
  expanded,
  changeSelection,
}: any): ReactElement => {
  const router = useRouter();
  const show = {
    x: 0,
    opacity: 1,
  };

  const hide = {
    x: "-100%",
    opacity: 1,
    display: "none",
  };

  const selectionChange = (event: any, data: any) => {
    changeSelection(event, data);
    router.push(`/expertise?${data}`);
  };

  return (
    <PBox isexpanded={isexpanded!}>
      <CollapsibleCard elevation={0} isexpanded={isexpanded}>
        {!isexpanded ? (
          <CollapsibleContent
            onClick={() => {
              handleExpand(index);
            }}
          >
            <CardBox style={{ cursor: "pointer" }}>
              <BackDiv>
                <FlexBox1Image
                  style={{
                    transform:
                      expanded[2] || (expanded[1] && index === 0)
                        ? "rotate(180deg)"
                        : undefined,
                  }}
                  src="https://narsun.s3.eu-central-1.amazonaws.com/backk.png"
                />
              </BackDiv>
              <HeaderDiv>
                <TransformText variant="h5">{heading}</TransformText>
              </HeaderDiv>
            </CardBox>
          </CollapsibleContent>
        ) : (
          <></>
        )}
        <Collapser
          onClick={(event: any) =>
            selectionChange(
              event,
              heading === "AI"
                ? "Artificial Intelligence"
                : heading === "Metaverse"
                ? "Metaverse Development"
                : heading
            )
          }
          animate={isexpanded ? show : hide}
        >
          <CardCollapse in={true}>
            <CollapseDiv>
              <LeftDiv>
                <LeftCont>
                  <TopBox>
                    <HTitle>{heading}</HTitle>
                    <DPara>{description}</DPara>
                  </TopBox>
                  <MoreBox>
                    <ELink
                      onClick={(event) =>
                        selectionChange(
                          event,
                          heading === "AI"
                            ? "Artificial Intelligence"
                            : heading === "Metaverse"
                            ? "Metaverse Development"
                            : heading
                        )
                      }
                    >
                      <Exp>{explore}</Exp>
                      <img
                        src="https://narsun.s3.eu-central-1.amazonaws.com/link2.png"
                        width=""
                        height=""
                        alt=""
                        style={{ width: "44px", height: "44px" }}
                      />
                    </ELink>
                  </MoreBox>
                </LeftCont>
              </LeftDiv>
              <RightDiv>
                <RightImg heading={heading} src={image} />
              </RightDiv>
              <MorerBox></MorerBox>
            </CollapseDiv>
          </CardCollapse>
        </Collapser>
      </CollapsibleCard>
    </PBox>
  );
};

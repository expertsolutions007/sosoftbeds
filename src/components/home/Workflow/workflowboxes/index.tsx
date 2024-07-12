import { useEffect } from "react";
import {
  Content,
  Heading,
  DividerBox,
  HeadingBox,
  Img,
  PDiv,
  ImgBox,
  ListDiv,
  LogoBox,
  HeadBox,
  List,
  ListItem,
} from "./workflow.workflowboxes.styles";

export default function WorkBox({
  heading,
  image,
  content,
  check,
  active,
  length,
  index,
  fade,
}: any) {
  useEffect(() => {
    content.map((cont: any) => {
      // console.log(cont);
    });
  }, [content]);

  return (
    <PDiv className="scroll-box">
      <HeadingBox>
        <HeadBox>
          <Heading check={active}>{heading}</Heading>
        </HeadBox>
        <LogoBox>
          <Img src={active == true ? image : fade} />
        </LogoBox>
      </HeadingBox>
      <ListDiv>
        <List>
          {content?.map((tags: any,key:any) => (
            <Content check={active} key={key}>
              <ListItem style={{ color: active == true ? "white" : "gray" }}>
                {tags?.title}
              </ListItem>
            </Content>
          ))}
        </List>
      </ListDiv>
    </PDiv>
  );
}

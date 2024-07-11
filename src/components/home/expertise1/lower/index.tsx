import Link  from "next/link";
import {
  BoxImage,
  Description,
  ImgContainer,
  InfoContainer,
  PBox,
  Title,
} from "./expertise1.lower.styles";

export default function Lower({ image, title, description }: any) {
  return title == "Get A Quote" ? (
    <Link href="" style={{ color: "white",textDecoration:"none" }}>
      <PBox title={title}>
        <BoxImage src={image} title={title} />
        <Title title={title}>{title}</Title>
      </PBox>
    </Link>
  ) : (
    <PBox>
      <ImgContainer>
        <BoxImage src={image} />
      </ImgContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoContainer>
    </PBox>
  );
}

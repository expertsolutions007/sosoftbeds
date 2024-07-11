import {
  Address,
  C1Box1,
  C1Box2,
  C2Box1,
  C3Box1,
  DiscountTxt,
  GoldPhone,
  Loc,
  Location,
  Mail,
  PBox1,
  PBox2,
  PBox3,
  PDiv,
  PFlex,
  PhoneNumber,
  Logo,
  Cart,
  Love,
  Search
} from "./navbar.styles"

export default function ButtonAppBar({ }: any) {

  return (
    <PDiv>
      <PBox1>
        <Logo src="./static/images/logo.png" />
      </PBox1>
      <PBox2>
        <Search src="./static/images/search.svg" />
        <Cart src="./static/images/cart.svg" />
        <Love src="./static/images/love.svg" />
      </PBox2>
    </PDiv>
  );
}

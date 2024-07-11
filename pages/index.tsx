import { PRiv } from "../src/styles/home.styles";
import Discount from "../src/components/home/discount";
import Selection from "../src/components/shared/selection";
import Navbar from "../src/components/shared/navbar";
import BackToTop from "../src/components/shared/backToTop";
import { Carousel } from "../src/components/home/carousel";

export default function Home() {

  return (
    <PRiv >
      <BackToTop/>
      <Discount />
      <Selection />
      <Navbar />
      <Carousel />
    </PRiv>
  );
}

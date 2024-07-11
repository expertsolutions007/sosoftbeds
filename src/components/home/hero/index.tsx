import React, { FC, ReactElement } from "react";
import { HeroContainer } from "./hero.styles";

type HeroType = {
  showLoading?: boolean;
  anyKey?: any;
};

interface IHero {
  // showLoading?: boolean | string | undefined,
  heroType?: HeroType;
  handleClick?: (num: number) => void;
}

export const Hero: FC<IHero> = ({ heroType, handleClick }): ReactElement => {
  return (
    <>
      <HeroContainer id="hero" className="parent">this is the paper section</HeroContainer>
    </>
  );
};

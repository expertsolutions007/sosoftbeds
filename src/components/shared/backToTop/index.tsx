import React, { memo, useEffect, useState } from "react";
import { BacktoTopImage } from "../navbar/navbar.styles";
import { ButtonContainer } from "./backToTop.styles";
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.scrollY > 100) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 100) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showButton) {
    return (
      <ButtonContainer onClick={scrollToTop}>
        <ArrowDropDownCircleRoundedIcon style={{ rotate: "180deg", height: "40px", width: "40px" }} />
      </ButtonContainer>
    );
  } else {
    return null;
  }
}

export default memo(BackToTop);

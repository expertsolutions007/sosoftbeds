import { PContainer } from "./bottomFooter.styles";
import { memo, useEffect, useState } from "react";

function BottomFooter({ changeSelection, content, lang }: any) {
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
    <PContainer maxWidth={width} lang={lang}>
      <p>Copyright © 2024 5 Star Beds Ltd all rights reserved. Powered by Ottoman beds</p>
    </PContainer>
  );
}
export default memo(BottomFooter);

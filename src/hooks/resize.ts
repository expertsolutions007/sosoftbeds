import { useEffect, useState } from "react";

const handleResize = () => {
  const [width, setWidth]: any = useState("md");
  const [mobileMenu, setMobile]: any = useState(false);

  useEffect(() => {
    function handleSize() {
      if (window.innerWidth >= 1280) {
        setWidth("lg !important");
        setMobile(false);
      } else if (window.innerWidth >= 940) {
        setWidth("md !important");
        setMobile(false);
      } else if (window.innerWidth >= 600) {
        setWidth("sm !important");
        setMobile(true);
      }
    }

    window.addEventListener("resize", handleSize);
  }, []);

  return { width, mobileMenu };
};

export default handleResize;
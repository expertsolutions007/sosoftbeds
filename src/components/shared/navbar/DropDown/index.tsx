import { useState, useEffect } from "react";
import { FC, ReactElement } from "react";
import { IDropDown } from "./types/types";
import {
  BoxDropDownItem,
  DropDownButton,
  DropDownImage,
  DropDownMenuItem,
  DropwDownImage,
  Linker,
  MenuItems,
  PMenu,
} from "./navbar.dropDown.styles";
import theme from "../../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { menu as menues } from "../data/data"
import { setNavbar } from "../../../../../slice";

export const PositionedMenu: FC<IDropDown> = ({
  name,
  data,
  link,
  changeSelection,
  lang
}): ReactElement => {
  const [selection, setSelection] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [disable, setDisable] = useState(false);
  const open = Boolean(anchorEl);
  const selector = useSelector((state: any) => state.global);
  const dispatch = useDispatch();

  const router = useRouter();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
  };

  const setSelector = (e: any, dat: any) => {
    changeSelection(e, dat);
  };

  const disableButton = () => {
    setDisable(true);
  };

  const enableButton = () => {
    setDisable(false);
  };

  useEffect(() => {
    if (window.location.href.includes("expertise")) {
      menues.map((meta: any) => {
        meta?.data?.map((min: any) => {
          if (lang === "ar") {
            if (min?.name == selector.navbar) {
              dispatch(setNavbar(min?.arName));
            }
          } else {
            if (min?.arName == selector.navbar) {
              dispatch(setNavbar(min?.name));
            }
          }
        })
      })
    }
  }, [lang])

  return (
    <>
      <MenuItems
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={() => {
          // let dest={name == "Portfolio"
          // ? "/portfolio"
          // : name == "Learn"
          // ? "/learn"
          // : name == "Real Estate"
          // ? "/realestate"
          // : ""}

          disableButton();
          handleClick(event);
        }}
        onMouseLeave={(event) => {
          handleClose(event);
          setDisable(false);
        }}
        theme={theme}
        open={open}
        onClick={() => {
          if (name == "Portfolio" || name == "مَلَفّ") {
            router.push("/portfolio");
          } else if (name == "Learn" || name == "يتعلم") {
            router.push("/learn");
          } else if (name == "Real Estate" || name == "العقارات") {
            router.push("/realestate");
          }
          else if (name == "Pitchdeck" || name == "العقارات") {
            router.push("/pitchdeck");
          }
        }}
      >
        {name}
        {data ? (<DropwDownImage
          src={"https://narsun.s3.eu-central-1.amazonaws.com/down.png"}
          theme={theme}
          name={name}
        />) : <></>}
      </MenuItems>
      {data ? (<PMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        onMouseEnter={() => handleClick(event)}
        onMouseLeave={(event) => handleClose(event)}
        open={open}
        name={name}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            background: "rgba(0,0,0,0.7)",
            "backdrop-filter": "blur(20px) !important",

            borderBottomLeftRadius: "35px",
            borderBottomRightRadius: "35px",
            borderTopLeftRadius: "35px",
            borderTopRightRadius: "35px",

            [theme.breakpoints.up("xl")]: {
              width:
                name == "Portfolio" || name == "Learn" ? "300px" : "1280px",
            },

            [theme.breakpoints.up("lg")]: {
              width:
                name == "Portfolio" || name == "Learn" ? "300px" : "1280px",
            },

            [theme.breakpoints.between("lg", "xl")]: {
              width:
                name == "Portfolio" || name == "Learn" ? "300px" : "1280px",
            },

            [theme.breakpoints.only("lg")]: {
              width: name == "Portfolio" || name == "Learn" ? "300px" : "940px",
            },

            [theme.breakpoints.between("md", "lg")]: {
              width: name == "Portfolio" || name == "Learn" ? "300px" : "940px",
            },
            maxHeight: "322px !important",

            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10,
            top: "10px !important",
            transition: "none",
            ".mui-style-cpk4lm .mui-style-1dxejl0": {
              maxHeight: "322px !important",
              height: "322px !important",
            },
            ".mui-style-1dxejl0": {
              maxHeight: "322px !important",
              height: "322px !important",
            },
          },
        }}
        theme={theme}
      >
        <DropDownMenuItem theme={theme} name={name}>
          {data?.map((dat: any) => (
            <BoxDropDownItem
              theme={theme}
              onClick={() => setSelector(event, lang == "ar" ? dat.arName : dat.name)}
            >
              <DropDownButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(e) => { handleClose(e); router.push(dat.link) }}
                theme={theme}
                name={name}
              >
                {dat.image ? <DropDownImage src={dat.image} /> : null}
                {lang == "ar" ? dat.arName : dat.name}
              </DropDownButton>
            </BoxDropDownItem>
          ))}
        </DropDownMenuItem>
      </PMenu>) : <></>}
    </>
  );
};

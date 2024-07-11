import { menu as menues } from "./data/data";
import { PositionedMenu } from "./DropDown";
import theme from "../../../theme";
import { useEffect, useState } from "react";
import MobileBar from "./mobileBar";
import {
  AppBarr,
  Menu,
  MenuToolBar,
  PCont,
  PBox,
} from "./navbar.styles";
import { useRouter } from "next/router";

export default function ButtonAppBar({ lang, changeSelection, content }: any) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width, setWidth]: any = useState("md");

  const router = useRouter();

  return (
    <PBox>
      <AppBarr theme={theme}>
        <PCont>
          <MenuToolBar theme={theme}>
            {mobileMenu ? (
              <MobileBar lang={lang} changeSelection={changeSelection} />
            ) : (
              <>
                <Menu theme={theme}>
                  {menues?.map((menu: any, index: any) => (
                    <PositionedMenu
                      key={index}
                      data={menu?.data}
                      name={lang == "ar" ? menu.arName : menu.name}
                      link={menu?.link!}
                      lang={lang}
                      changeSelection={changeSelection}
                      width={width}
                    />
                  ))}
                </Menu>
              </>
            )}
          </MenuToolBar>
        </PCont>
      </AppBarr>
    </PBox>
  );
}
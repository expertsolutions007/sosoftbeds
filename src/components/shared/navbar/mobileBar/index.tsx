// import { NarsunImage } from "../navbar.styles";
import { NarsunLogo } from "./navbar.mobileBar.styles";
import { links, links as menues } from "../data/mobilelinks";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import theme from "../../../../theme";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useDispatch } from "react-redux";
// import { setNavbar } from "../../../../../slice";

import {
  List,
  Divider,
  ListItem,
  ListItemButton,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Link from "next/link";

export default function MobileBar({ changeSelection, lang }: any) {
  const [mobileToggle, setMobileToggle] = useState(false);
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

  const handleMobileToggle = ({ mobileMenu }: any) => {
    setMobileToggle(!mobileToggle);
  };

  const updateSelection = (e: any, data: any) => {
    changeSelection(e, data);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box
      onClick={handleMobileToggle}
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: 1,
        height: "150%",
        width: "250px",
        display: "flex",
        overflowY: "scroll",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          "& header": {
            paddingTop: 0,
          },
          header: {
            paddingTop: 0,
          },
          "& > header": {
            paddingTop: 0,
          },
        },
      }}
    >
      <Link
        href="/"
        style={{
          color: "white",
          textTransform: "none",
          textDecoration: "none",
        }}
      ></Link>
      <Divider />
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
      >
        {menues.map((item, index) => {
          return item.name === "Expertise" || item.name === "Company" ? (
            item.name == "Expertise" ? (
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={true}
                key={index}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    {lang == "en" ? "Expertise" : item.arName}
                  </Typography>
                </AccordionSummary>
                {links[1]?.list?.map((link: any, index: any) => {
                  return (
                    <AccordionDetails
                      key={index}
                      sx={{ color: "white", opacity: 0.8 }}
                      onClick={() => updateSelection(event, link.title)}
                    >
                      <Typography
                        sx={{
                          paddingBottom: 1,
                          color: "white",
                        }}
                      >
                        <Link
                          style={{
                            color: "white",
                            textTransform: "none",
                            textDecoration: "none",
                          }}
                          href={link.link}
                        >
                          <ArrowRightIcon />
                          {lang == "en" ? link.title : link.arName}
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  );
                })}
              </Accordion>
            ) : (
              <Accordion
                sx={{ backgroundColor: "black" }}
                expanded={true}
                key={index}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    {lang == "en" ? "Company" : item?.arName}
                  </Typography>
                </AccordionSummary>

                {links[5]?.list?.map((link: any, index: any) => (
                  <AccordionDetails
                    key={index}
                    sx={{ color: "white", opacity: 0.8 }}
                    onClick={() => updateSelection(event, link?.title)}
                  >
                    <Typography
                      sx={{
                        paddingBottom: 1,
                        color: "white",
                      }}
                    >
                      <Link
                        style={{
                          color: "white",
                          textTransform: "none",
                          textDecoration: "none",
                        }}
                        href={link.link}
                      >
                        <ArrowRightIcon />
                        {lang == "en" ? link?.title : link?.arName}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                ))}
              </Accordion>
            )
          ) : (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => updateSelection(event, item.name)}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link
                  href={item.link ? item.link : ""}
                  style={{
                    color: "white",
                    textTransform: "none",
                    textDecoration: "none",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>{lang == "en" ? item.name : item.arName}</Typography>
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box maxWidth={width}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <Toolbar sx={{}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleMobileToggle}
              sx={{
                [theme.breakpoints.down("md")]: {
                  position: "relative",
                  width: "22px",
                  marginTop: "-12px",
                },
                [theme.breakpoints.down("sm")]: {
                  position: "relative",
                  width: "22px",
                  marginTop: -1.5,
                },
              }}
            >
              <img
                src="https://narsun.s3.eu-central-1.amazonaws.com/burger.png"
                alt=""
                style={{
                  width: "25px",
                  height: "10px",
                }}
              />
            </IconButton>
          </Toolbar>
{/*
          <NarsunLogo theme={theme} href="/">
            <NarsunImage
              src={"https://narsun.s3.eu-central-1.amazonaws.com/logofied.png"}
              alt="Narsun Logo"
            />
          </NarsunLogo> */}
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileToggle}
          onClose={handleMobileToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

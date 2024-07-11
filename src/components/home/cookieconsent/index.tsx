import { useEffect, useState } from "react";
import {
  CDialog,
  CDialogContent,
  CDialogContentText,
} from "./cookieconsent.style";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export default function CookieConsent() {
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  function getCookie(name: any) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const parts = cookie.split("=");
      const cookieName = parts[0].trim();
      if (cookieName === name) {
        return parts[1];
      }
    }
    return null;
  }
  function getCookieExpiration(days: any) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    return date.toUTCString();
  }
  useEffect(() => {
    // Check if the user has already accepted cookies
    if (getCookie("cookieConsent") === "accepted") {
      setShowCookiePopup(false);
    } else {
      setShowCookiePopup(true);
    }
  }, []);
  const acceptCookies = () => {
    // Set local storage to remember user consent for 30 days
    document.cookie =
      "cookieConsent=accepted; expires=" + getCookieExpiration(30) + "; path=/";
    setShowCookiePopup(false);
  };

  const handleClose = (event: any, reason: any) => {
    event.preventDefault();
    if (reason && reason !== "backdropClick") {
      setShowCookiePopup(false);
    }
  };

  return showCookiePopup ? (
    <CDialog
      fullScreen={fullScreen}
      open={showCookiePopup}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Cookies</DialogTitle>
      <CDialogContent>
        <CDialogContentText>
          Our website uses cookies to enhance user experience. By using the
          site, you agree to the use of cookies. You can manage cookie settings
          in your browser. Please note that third-party cookies are subject to
          their respective policies. Periodic updates to this policy may occur
          due to technological changes.
          {/* <Link style={{ color: "#fff", marginLeft: "5px" }} href="/">
            Privacy Policy
          </Link> */}
        </CDialogContentText>
      </CDialogContent>
      <DialogActions
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            background: "#191919",
            width: "180px",
            padding: "16px 30px",
            borderRadius: "42px",
            border: "1px solid #FFF",
            height: "48px",
            color: "#FFF",
            fontSize: "16px",
          }}
          onClick={() => {
            setShowCookiePopup(false);
          }}
        >
          Reject
        </Button>
        <Button
          style={{
            background: "#191919",
            // width: "180px",
            padding: "16px 30px",
            borderRadius: "42px",
            height: "48px",
            color: "#FFF",
            fontSize: "16px",
            fontWeight: 500,
          }}
          onClick={acceptCookies}
        >
          Accept Cookies
        </Button>
      </DialogActions>
    </CDialog>
  ) : null;
}

import {
  styled,
  Modal,
  Box,
  Button,
  Typography,
  Dialog,
  DialogContentText,
  DialogContent,
} from "@mui/material";

export const CDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  "& .MuiPaper-root": {
    backgroundColor: "#000",
    color: "#FFFFFF",
    borderRadius: "40px",
    height: "unset",
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    bottom: 50,
    left: 0,
  },
}));
export const CDialogContentText = styled(DialogContentText)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.50)",
  fontFamily: "Helvetica !important",
}));
export const CDialogContent = styled(DialogContent)(({ theme }) => ({}));

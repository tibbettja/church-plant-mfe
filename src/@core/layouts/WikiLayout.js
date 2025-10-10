"use client";

import * as React from "react";

import { styled, Box, Grid } from "@mui/material";
import Footer from "./components/footer";
import Header from "./components/header";
import LeftBar from "./components/left-bar";
import RightBar from "./components/right-bar";
import themeConfig from "@/configs/themeConfig";

const WikiLayoutWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  backgroundColor: theme.palette.background.default,
  paddingBottom: theme.spacing(14),
}));

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingX: theme.spacing(4),
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: themeConfig.navigationSize,
    width: `calc(100vw - ${themeConfig.navigationSize}px)`,
  },
  marginTop: theme.spacing(12),
}));

const WikiLayout = ({ children, leftBar, rightBar }) => {
  return (
    <>
      <WikiLayoutWrapper>
        <Header />
        <MainContentWrapper>
          <Grid container sx={{ width: "100%" }}>
            <Grid size={1}>
              <LeftBar {...leftBar} />
            </Grid>
            <Grid size={10}>
              <ContentWrapper>{children}</ContentWrapper>
            </Grid>
            <Grid size={1}>
              <RightBar {...rightBar} />
            </Grid>
          </Grid>
        </MainContentWrapper>
        <Footer />
      </WikiLayoutWrapper>
    </>
  );
};

export default WikiLayout;

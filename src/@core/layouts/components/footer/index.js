"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  Grid,
  Box,
  List,
  useTheme,
  ListItem,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  Link
} from "@mui/material";
import Logo from "public/images/conduit_logo.png";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import themeConfig from "@/configs/themeConfig";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={5} padding={5} sx={{ alignItems: "stretch" }}>
      <Grid size={{ xs: 6, md: 3, lg: 2 }} offset={{ xs: 0, md: 0, lg: 1 }}>
        <List>
          <ListItem>
            <Typography
              sx={{ color: theme.palette.secondary.main }}
              variant="body2"
            >
              About
            </Typography>
          </ListItem>
          <ListItem>
            <Link href="/about" title={`About ${themeConfig.appName.charAt(0).toUpperCase()}${themeConfig.appName.slice(1)}`} component={NextLink}>
              <Typography variant="subtitle1">
                About{" "}
                {themeConfig.appName.charAt(0).toUpperCase() +
                  themeConfig.appName.slice(1)}
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/beliefs" title="Beliefs" component={NextLink}>
              <Typography variant="subtitle1">Beliefs</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/ministry/kids" title="Kids" component={NextLink}>
              <Typography variant="subtitle1">Kids</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/ministry/students" title="Students" component={NextLink}>
              <Typography variant="subtitle1">Students</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/ministry/college" title="College" component={NextLink}>
              <Typography variant="subtitle1">College</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/ministry/marriage" title="Marriage" component={NextLink}>
              <Typography variant="subtitle1">Marriage and Family</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/contact-us" title="Contact Us" component={NextLink}>
              <Typography variant="subtitle1">Contact Us</Typography>
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 6, md: 3, lg: 2 }}>
        <List>
          <ListItem>
            <Typography
              sx={{ color: theme.palette.secondary.main }}
              variant="body2"
            >
              Next Steps
            </Typography>
          </ListItem>
          <ListItem>
            <Link href="/next-steps" title="Next Steps" component={NextLink}>
              <Typography variant="subtitle1">Next Steps</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/grow/baptism" title="Baptism" component={NextLink}>
              <Typography variant="subtitle1">Baptism</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/grow/discipleship" title="Discipleship" component={NextLink}>
              <Typography variant="subtitle1">Discipleship</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/grow/serve-team" title="Serve Team" component={NextLink}>
              <Typography variant="subtitle1">Serve Team</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/grow/small-groups" title="Small Groups" component={NextLink}>
              <Typography variant="subtitle1">Small Groups</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/prayer-wall" title="Prayer Wall" component={NextLink}>
              <Typography variant="subtitle1">Prayer Wall</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/your-story" title="Share Your Story" component={NextLink}>
              <Typography variant="subtitle1">Share Your Story</Typography>
            </Link>
          </ListItem>
        </List>
      </Grid>
      <Grid
        size={{ xs: 4, md: 3 }}
        offset={{ xs: 4, md: 3 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Box sx={{ textAlign: isMobile ? "center" : "right" }}>
          <Image
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "auto", opacity: 0.25 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: "center",
              gap: 3,
            }}
          >
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Divider sx={{ textAlign: "right" }}>
          &copy;{" "}
          {themeConfig.appName.charAt(0).toUpperCase() +
            themeConfig.appName.slice(1)}{" "}
          Church 2025
        </Divider>
      </Grid>
    </Grid>
  );
};

export default Footer;

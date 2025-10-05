"use client";

import Image from "next/image";
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
} from "@mui/material";
import Logo from "public/images/avail_logo.svg";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import themeConfig from "@/configs/themeConfig";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={5} padding={5} sx={{ alignItems: "stretch" }}>
      <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 0, md: 1 }}>
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
            <Typography variant="subtitle1">About Avail</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Leadership</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Kids</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Students</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">College</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Marriage and Family</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Contact Us</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 6, md: 2 }}>
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
            <Typography variant="subtitle1">Next Steps</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Baptism</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Discipleship</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Serve Team</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Small Groups</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Prayer Wall</Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle1">Share Your Story</Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        offset={{ xs: 0, md: 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Box sx={{ textAlign: isMobile ? "center" : "right" }}>
          <Image src={Logo} alt="logo" height={100} width={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
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
          &copy; {themeConfig.appName} Church 2025
        </Divider>
      </Grid>
    </Grid>
  );
};

export default Footer;

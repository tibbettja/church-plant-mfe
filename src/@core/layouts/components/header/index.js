"use client";

import Image from "next/image";
import {
  Grid,
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import fonts from "@/@core/theme/fonts";
import themeConfig from "@/configs/themeConfig";
import Logo from 'public/images/avail_logo.svg'

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={0}
      paddingX={6}
      paddingY={2}
      className={fonts.header.className}
      component={Paper}
      sx={{ position: 'fixed', top: 0, left: 0, zIndex: 2, width: '100%', borderBottom: `solid 4px ${theme.palette.secondary.main}`}}
    >
      <Grid size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 0 }}>
        <Image src={Logo} alt='Avail Church Logo' height={50} width={50} />
        <Typography variant="h3">{themeConfig.appName}</Typography>
      </Grid>
      {!isMobile && (
        <Grid
          size={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: 1,
          }}
        >
          <Button size="small">About</Button>
          <Button size="small">Grow</Button>
          <Button size="large">Visit</Button>
          <Button size="small">Events</Button>
          <Button size="small">Give</Button>
        </Grid>
      )}
      <Grid
        size={{ xs: 6, md: 3 }}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton size="large">
          <Menu />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;

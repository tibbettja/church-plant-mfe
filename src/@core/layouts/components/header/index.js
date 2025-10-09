"use client";

import Image from "next/image";
import {
  Grid,
  Menu,
  MenuItem,
  Typography,
  Button,
  Link,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import fonts from "@/@core/theme/fonts";
import themeConfig from "@/configs/themeConfig";
import Logo from 'public/images/conduit_logo.png'
import AboutMenu from "./components/AboutMenu";
import GrowMenu from "./components/GrowMenu";
import NextLink from "next/link";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={0}
      paddingX={6}
      paddingY={2}
      component={Paper}
      sx={{ position: 'fixed', top: 0, left: 0, zIndex: 2, width: '100%', borderBottom: `solid 4px ${theme.palette.secondary.main}`}}
    >
      <Grid size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 3 }} className={fonts.logo.className}>
        <Link href='/' style={{ height: 50, width: 50 }} component={NextLink}>
          <Image src={Logo} alt='Conduit Church Logo' height={50} width={50} />
        </Link>
        <Link href='/' component={NextLink}>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>{themeConfig.appName}</Typography>
        </Link>
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
          <AboutMenu />
          <GrowMenu />
          <Link href="/visit" title="Visit"><Button variant='outlined'>Visit</Button></Link>
          <Link href="/events" title="Events"><Button>Events</Button></Link>
          <Link href="/give" title="Give"><Button>Give</Button></Link>
        </Grid>
      )}
      { isMobile && (
        <Grid
          size={{ xs: 6, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <MobileMenu />
        </Grid>
      )}
    </Grid>
  );
};

export default Header;

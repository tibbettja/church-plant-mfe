import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import nextConfig from "next.config.mjs";

const Home = () => {
  return (
    <Grid container padding={0} rowSpacing={5} columnSpacing={0}>
      <Grid size={12}>
        <img
          src={`${nextConfig.assetPrefix}/images/home_hero.avif`}
          alt="Bible and Coffee"
          style={{ maxWidth: "100%", height: "auto", filter: 'hue-rotate(200deg) grayscale(10%) blur(2px)' }}
        />
      </Grid>
      <Grid size={10} offset={1} sx={{ zIndex: 1 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }} component={Card}>
            <CardHeader title="Plan your Visit" />
            <CardContent>
              <Typography variant="body1">
                We'd love for you to join us this Sunday!
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button variant="contained">Meet with us</Button>
            </CardActions>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} component={Card}>
            <CardHeader title="Recent Messages" />
            <CardContent>
              <Typography variant="body1">
                Check out our recent messages or full worship service online!
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button variant="contained">Watch Now</Button>
            </CardActions>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} component={Card}>
            <CardHeader title="One Year Bible" />
            <CardContent>
              <Typography variant="body1">
                Spend time in God's Word with this daily Bible reading plan.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button variant="contained">Start Reading</Button>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12} sx={{ zIndex: 1 }} component={Paper}>
        <Grid container spacing={3} padding={10}>
          <Grid
            offset={{ xs: 0, sm: 0, md: 1, lg: 2 }}
            size={{ xs: 12, sm: 12, md: 6, lg: 5, xl: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={`${nextConfig.assetPrefix}/images/worship.avif`}
              alt="Community Worship"
              height={300}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 6 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              A church family helping people Know God, Find Freedom, Discover
              their Purpose & Make a Difference.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;

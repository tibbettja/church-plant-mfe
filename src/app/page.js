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
import Image from "next/image";
import HeroImage from "public/images/home_hero.jpg";
import WorshipImage from "public/images/worship.avif";

const Home = () => {
  return (
    <Grid container padding={0} rowSpacing={5} columnSpacing={0}>
      <Grid size={12}>
        <Image
          src={HeroImage}
          alt="Bible and Coffee"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={10} offset={1} sx={{ zIndex: 1 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }} component={Card}>
            <CardHeader title="Plan your Visit" />
            <CardContent>
              <Typography>We'd love for you to join us this Sunday!</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button variant="contained">Meet with us</Button>
            </CardActions>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} component={Card}>
            <CardHeader title="Recent Messages" />
            <CardContent>
              <Typography>
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
              <Typography>
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
          <Grid offset={{ xs: 0, md: 3 }} size={{xs: 12, md: 3}}>
            <Image src={WorshipImage} alt="Community Worship" height={300} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4}}
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

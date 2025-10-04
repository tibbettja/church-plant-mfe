import { Grid, Box, Typography, Button, IconButton, Paper } from "@mui/material"
import { Menu } from "@mui/icons-material";
import fonts from "@/@core/theme/fonts";
import themeConfig from "@/configs/themeConfig";


const Header = () => (
    <Grid container spacing={0} padding={3} className={fonts.header.className} component={Paper}>
        <Grid size={3}>
            <Typography variant='h3'>
                {themeConfig.appName}
            </Typography>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: 1 }}>
            <Button size='small'>About</Button>
            <Button size='small'>Grow</Button>
            <Button size='large'>Visit</Button>
            <Button size='small'>Events</Button>
            <Button size='small'>Give</Button>
        </Grid>
        <Grid size={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <IconButton size='large'><Menu /></IconButton>
        </Grid>
    </Grid>
)

export default Header
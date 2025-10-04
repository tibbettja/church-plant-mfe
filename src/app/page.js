import { Grid } from "@mui/material"
import Image from "next/image"
import HeroImage from 'public/images/home_hero_conduit.jpg'

const Home = () => {
    return (
        <Grid container spacing={0} padding={0}>
            <Grid size={12}>
                <Image
                    src={HeroImage}
                    alt='Bible and Coffee'
                    style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
                />
            </Grid>
        </Grid>
    )
}

export default Home
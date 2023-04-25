import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
    return (
        <Box component='footer' sx={{ backgroundColor: '#152425' }}  >
            <Container maxWidth='lg'>
                <Grid container spacing={6} sx={{ pt: 10, pb: 2 }}>
                    <Grid item sm={12} >
                        <Typography variant='body1' fontWeight='700' color='#CCD5E2' textAlign="center">
                            SALE UP TO <span style={{ color: "#d4bb93" }}>70%</span>  OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.

                        </Typography><br />

                        <Typography
                            variant='body1'
                            color='#152425'
                            my={1}
                            fontWeight='700'
                            mb={1}
                            textAlign="center"
                            sx={{ backgroundColor: "#CCD5E2", borderRadius: 50 }}
                        >
                            Follow Us On <br /><LinkedInIcon /><span style={{ marginLeft: "12px" }} />
                            <TwitterIcon /><span style={{ marginLeft: "12px" }} />
                            <InstagramIcon /><span style={{ marginLeft: "12px" }} />
                            <FacebookIcon />
                        </Typography> <br />
                        <Typography variant='body1' fontWeight='700' color='#B79F49' textAlign="center">
                            Copyright © 2023 EASY SHOP. Powered by MAHMOUD BARAKAT.
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
import { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AppStore() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Container maxWidth='lg'>
            <Grid container alignItems='center' my={12} spacing={2}>
                <Grid item xs={12} sm={6} data-aos='fade-right'>
                    <img
                        src='/src/assets/easy.png'
                        alt='phone'
                        style={{
                            height: "365px",
                            width: "360px"
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} data-aos='fade-right'>
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        sx={{
                            fontSize: {
                                xs: 'h6.fontSize',
                                md: 'h5.fontSize',
                            },
                            fontWeight: '700',
                            color: "#152425",
                        }}
                        my={1}
                    >
                        Discover The New EASY SHOP APP
                    </Typography>

                    <Typography color='#95b359'>
                        JUST DREAM IN IT WITH US!
                    </Typography>

                    <Typography variant='body1' color='#152425' my={2} sx={{ textTransform: "capitalize" }}>
                        We are a group of companies that started in 2002. We have a lot of experience and manpower.
                        Our only goal is to make you happy.
                        Our motto is EASY BAY EASY SHOP
                    </Typography>
                    <Grid container alignItems='center' my={4} >
                        <Grid item xs={6} sm={6} data-aos='fade-right'>
                            <img
                                src={'/src/assets/playstore.png'}
                                alt='playstore'
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} data-aos='fade-right'>
                            <img
                                src='/src/assets/appstore.png'
                                alt='appstore'

                            />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Container, Grid, Typography } from '@mui/material'

function ABoutC() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section style={{
            padding: "3rem 0",
            backgroundColor: "#FAFAFA",
            position: "relative",
        }}>
            <Typography
                variant='h4'
                color='#152425'
                textAlign='center'
                sx={{
                    fontSize: {
                        xs: 'h5.fontSize',
                        md: 'h4.fontSize',
                    },
                    fontWeight: '700',
                }}
                data-aos='zoom'
            >
                What's<span style={{ color: "#B79F49", borderRadius: "100%" }}> EASY</span> SHOP ?
            </Typography>
            <Typography variant='body1' color='#217A7E' my={2} textAlign='center'>
                You can rest assured that repairs are only performed with your prior approval of the work
            </Typography>

            <Container maxWidth='lg'>
                <Grid container alignItems='center' my={12} spacing={2}>

                    <Grid item xs={12} sm={8} data-aos='fade-right'>
                        <Typography variant='body1' color='#152425' my={2}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here,
                            content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} data-aos='fade-right'>
                        <img
                            src='/src/assets/about.png'
                            alt='phone'
                            style={{
                                height: "365px",
                                width: "360px"
                            }}
                        />
                    </Grid>

                </Grid>
            </Container>
        </section>
    );
}

export default ABoutC;
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function Categories({ records }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <Container maxWidth="lg">
            <Box sx={{ width: '100%' }} >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
                    {records.map((el) => (
                        <Grid xs={4} key={el.id}>
                                <Card sx={{ width: 345, height: 345 }} >
                                    <CardMedia
                                        sx={{ height: 220 }}
                                        image={`/src/assets/cimgs/${el.img}`}
                                        title="green iguana"
                                    >
                                        <span
                                            style={{
                                                padding: " 0.8rem 1rem",
                                                backgroundColor: "rgb(21 36 37 / 55%)",
                                                borderRadius: "2rem",
                                                textTransform: "capitalize",
                                                fontWeight: 600,
                                            }}
                                        >{el.price} </span>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                                            {el.title}

                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            xmxkzmx
                                        </Typography>
                                    </CardContent>
                                    <p>Mahmoud Barakat</p>
                                </Card>
                        </Grid>

                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Typography } from '@mui/material';
import Mcon from '../../layout/Container';
import style from "./types.module.css"
import { Container, Box, Grid, CardMedia, CardContent, Card } from '@mui/material';
import { Link } from 'react-router-dom';

function Types({ records }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <Mcon>
            <Typography
                variant='h4'
                color='#042E3C'
                textAlign='center'
                sx={{
                    fontSize: {
                        xs: 'h4.fontSize',
                        md: 'h4.fontSize',
                    },
                    fontWeight: '600',
                }}
                data-aos='zoom'
            >
                OUR Departments
            </Typography>
            <div className={style.balls}>
                <div style={{ backgroundColor: "#d4bb93" }} />
                <div style={{ backgroundColor: "#152425" }} />
                <div style={{ backgroundColor: "#046169" }} />
            </div>
            <div className={style.TypesC}>
                <Container maxWidth="lg">
                    <Box sx={{ width: '100%' }} >
                        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 1, md: 5 }}  >
                            {records.map((el) => (
                                <Grid xs={12} md={4} item key={el.id}>
                                    <Link to={`${el.prefix}/items`}>
                                        <Card sx={{ width: 345, height: 345, borderRadius: 70,boxShadow:"none",backgroundColor:"transparent" }} >
                                            <CardMedia
                                                sx={{ height: 290, borderRadius: 15 }}
                                                image={`/src/assets/timgs/${el.img}`}
                                                title={el.title}
                                            >
                                            </CardMedia>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5"
                                                    style={
                                                        { textTransform: "capitalize", marginLeft: 10, borderRadius: 15, color: "#217A7E" }
                                                    } textAlign='center' >
                                                    {el.title}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Grid>

                            ))}
                        </Grid>
                    </Box>
                </Container>
            </div>
        </Mcon>
    );
}

export default Types;
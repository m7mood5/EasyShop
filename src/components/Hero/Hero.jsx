import { motion } from 'framer-motion'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import style from "./hero.module.css"
import image from "../../assets/hero.jpg"
import { Link } from 'react-router-dom'
import btn from "../Btn/Btn.module.css"
export default function Hero() {
    return (
        <Box sx={{ marginTop: 2, height: 650, backgroundColor: "#d4bb93" }} className={style.hero}>
            <Grid container rowSpacing={2} justifyContent='right' alignItems='center'>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ textAlign: { xs: 'center', md: 'left' }, zIndex: '2' }}
                >
                    <Typography
                        display='inline'
                        variant='h2'
                        color='#046169'
                        sx={{
                            fontWeight: { xs: '500', sm: '500', lg: '700' },
                            fontSize: {
                                xs: 'h4.fontSize',
                                sm: 'h3.fontSize',
                                lg: 'h2.fontSize',
                            },
                            mt: { xs: 20 }
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 1,
                                delay: 0.4,
                            }}
                        >
                            <span>Raining Offers For Hot Summer!</span>
                        </motion.div>
                    </Typography>
                    <Box
                        sx={{
                            float: 'right',
                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 1,
                                delay: 0.4,
                            }}
                        >
                        </motion.div>
                    </Box>
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1,
                            delay: 0.4,
                        }}
                    >
                        <Typography variant='h6' color='#434343' mb={1.58} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Typography>
                        <Link to="login">
                            <button className={btn.pbtn}>Shop now</button>
                        </Link>
                        <Link to="about">
                            <button className={btn.sbtn}>About Us</button>
                        </Link>
                    </motion.div>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ mt: { xs: -23.8, md: 0 }, marginRight: 12 }}
                    textAlign='right'
                >
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1,
                            delay: 0.4,
                        }}
                    >
                        <img src={image} className={style.image} />
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    )
}
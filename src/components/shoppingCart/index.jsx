import { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Form } from 'react-bootstrap'
import { removeItem } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'


export default function ShoppingCartt({ data, changeQuantityHandler, quantity, actionType }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const options = Array(data.max)
        .fill(1)
        .map((_, idx) => {
            const value = ++idx;
            return (
                <option value={value} key={value}>{value}</option>
            )
        })
    const dispatch = useDispatch();
    const actionHandler = () => {
        if (actionType === "remove") {
            dispatch(removeItem(data.id))
        }
    }

    return (
        <Container maxWidth='lg'>
            <div style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                display: "flex",
                borderRadius: 25,
                marginBottom: 10,
            }}>
                <Grid container alignItems='center' my={5} sx={{
                    borderRadius: 10,
                    background: "rgb(228, 211, 170)"
                }}>
                    <Grid xs={2} sm={2} item data-aos='fade-right' />
                    <Grid xs={10} sm={4} item data-aos='fade-right' >
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
                                textTransform: "capitalize",
                            }}
                            my={1}
                        >
                            {data.title}
                        </Typography>

                        <Typography color='#95b359'>
                            EASY BAY EASY SHOP!
                        </Typography>

                        <Typography variant='body1' color='#152425' my={2}>
                            {data.price}
                        </Typography>
                        <Form.Select value={quantity} onChange={(e) => changeQuantityHandler({ quantity: +e.target.value, id: data.id })}>
                            {options}
                        </Form.Select>
                        <button onClick={actionHandler}>
                            remove
                        </button>
                    </Grid>
                    <Grid xs={1} sm={2} item data-aos='fade-right' />
                    <Grid item xs={11} sm={4} data-aos='fade-right'>
                        <img src={`/src/assets/cimgs/${data.img}`} />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}
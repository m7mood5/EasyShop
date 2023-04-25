import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from '../store/itemSlice';
import { useParams } from 'react-router-dom';
import ItemsC from '../components/items';
import { Container, Box, Grid } from '@mui/material';
import Mcon from '../layout/Container';
import style from "../components/Taypes/types.module.css"
import Alert from 'react-bootstrap/Alert';
import { closeReachToMax } from '../store/cartSlice';

const Items = () => {
    const { prefix } = useParams()
    const dispatch = useDispatch()
    const { records, error, loading } = useSelector(state => state.items);
    const reachedToMax = useSelector((state) => state.cart.reachadToMax)

    useEffect(() => {
        dispatch(filterItems(prefix))
        return () => {
            dispatch({ type: "items/cleanRecords" })
        }
    }, [dispatch, prefix])

    // fun for close alert
    const closeReachToMaxHandler = useCallback(() => {
        dispatch(closeReachToMax())
    }, [dispatch])


    // dynamic close alert
    useEffect(() => {
        if (!reachedToMax) return;
        const debounce = setTimeout(closeReachToMaxHandler, 1500)
        return () => {
            clearTimeout(debounce);
        }
    }, [reachedToMax, closeReachToMaxHandler]);

    const items = records.map((el) => (
        <ItemsC key={el.id} {...el} actionType="add" />
    ))

    // عشان لو الديناميك وقته كبير والعميل قفل قبل ما الوقت يخلص متفضلش موجوده 
    // بستخدم فيها ليسنر لل js 
    useEffect(() => {
        window.addEventListener('beforeunload', (event) => {
            closeReachToMaxHandler();
            event.preventDefault();
            event.returnValue = '';
        })
        return () => {
            window.addEventListener('beforeunload', (event) => {
                closeReachToMaxHandler();
                event.preventDefault();
                event.returnValue = '';
            })
        }
    }, [closeReachToMaxHandler])
    return (

        <Mcon>
            <div className={style.balls}>
                <div style={{ backgroundColor: "#d4bb93" }} />
                <div style={{ backgroundColor: "#152425" }} />
                <div style={{ backgroundColor: "#046169" }} />
            </div>
            <div className={style.TypesC}>
                <Container maxWidth="lg">
                    <Box sx={{ width: '100%' }} >
                        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 1, md: 5 }}  >
                            {items}
                        </Grid>
                        <div style={
                            {
                                position: "absolute",
                                left: 0, top: 0,
                                marginRight: "100px",
                                marginBottom: 5, background: "#b3c3c4",
                                borderRadius: 5, color: "#152425"
                            }}
                        >
                            {
                                reachedToMax ? (
                                    <Alert
                                        variant="info"
                                        onClose={closeReachToMaxHandler}
                                        dismissible
                                    >
                                        <p>Sorry, You Reached Maximum Limit. </p>
                                    </Alert>
                                ) : null
                            }
                        </div>
                    </Box>
                </Container>
            </div>
        </Mcon>
    )
}

export default Items

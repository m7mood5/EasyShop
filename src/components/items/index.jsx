import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Rating, Typography } from '@mui/material';
import { Grid, CardMedia, CardContent, Card } from '@mui/material';
import style from "./item.module.css";
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Spinner from 'react-bootstrap/Spinner';
import { addToCart } from '../../store/cartSlice';



function ItemsC({ actionType, id, img, seal, cat_prefix, title, rating, price, pris, max }) {
    // add to cartعشان ياخد وقته ف 
    // ال 500 دول الوقت اللى بياخده عشان تاني ضغطه
    const [disabled, setDisabled] = useState(false);
    const [btnClick, setbtnClick] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        setDisabled(true);
        const debounce = setTimeout(() => {
            setDisabled(false)
        }, 500);

        return () => {
            clearTimeout(debounce)
        }
    }, [btnClick])

    //from redux to custmize btn "add to cart" 
    const dispatch = useDispatch();
    const actionHandler = () => {
        if (actionType === "add") {
            dispatch(addToCart({ id, max }))
            setbtnClick((prev) => prev + 1)
        }
    }
    return (
        <Grid xs={12} md={4} item key={id}>
            <Card sx={{ width: 345, height: 470, borderRadius: 12, boxShadow: "none", backgroundColor: "#ffffff" }}  >
                <CardMedia
                    sx={{ height: 290, borderRadius: 1 }}
                    image={`/src/assets/cimgs/${img}`}
                    title={title}>
                    {
                        seal ? (
                            <span
                                style={{
                                    padding: " 0.5rem ",
                                    backgroundColor: "#217A7E",
                                    borderRadius: "35%",
                                    textTransform: "capitalize",
                                    fontWeight: 600,
                                    margin: "40px ",
                                }}
                            > {seal}</span>
                        ) : null
                    }
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5"
                        style={
                            { textTransform: "capitalize", marginLeft: 10, borderRadius: 15, color: "#217A7E" }
                        } textAlign='center' >
                        {title}<span className={style.tiny}>
                            .{cat_prefix}
                        </span>
                    </Typography>
                    <div className={style.content}>
                        <Rating
                            value={rating}
                            disabled
                        />
                    </div>
                    <div className={style.price}>
                        <s>{pris}</s>
                        <p>{price}</p>
                    </div>
                    <div className={style.btn}>
                        <button onClick={actionHandler} disabled={disabled}>
                            {disabled ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                    />{" "}
                                    <span style={{
                                        fontWeight: 700
                                    }}>Loading...</span>
                                </>
                            ) : (
                                <>
                                    <AddShoppingCartIcon sx={{ mr: 1 }} /><span className={style.tiny}>Add To Cart</span>
                                </>
                            )}
                        </button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ItemsC;
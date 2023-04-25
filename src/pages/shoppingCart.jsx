import { useDispatch, useSelector } from 'react-redux'
import { shoppingCartitems } from '../store/itemSlice'
import { changeQuantity } from '../store/cartSlice';
import ShoppingCartt from '../components/shoppingCart'
import { memo, useCallback, useEffect } from 'react';

const shoppingCart = () => {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
  const products = useSelector((state) => state.items.records)
  useEffect(() => {
    dispatch(shoppingCartitems(items))
  }, [dispatch, items])

  const changeQuantityHandler = useCallback((data) => {
    dispatch(changeQuantity(data))
  }, [dispatch])


  const ShoppingC =
    products.length ?
      products.map((el) => {
        const quantity = items[el.id];
        return <ShoppingCartt key={el.id} data={el} quantity={quantity}
          changeQuantityHandler={changeQuantityHandler} actionType="remove" />
      }) : "Your Cart is empty";
  return (
    <div style={{ background: "#cbd4d9" }}>
      {ShoppingC}
    </div>
  )
}

export default memo(shoppingCart) 
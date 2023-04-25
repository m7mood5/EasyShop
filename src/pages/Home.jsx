import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTypes } from '../store/typeSlice'
import Types from '../components/Taypes'
import AppStore from '../components/appStore'

const Home = () => {

    const dispatch = useDispatch()
    const { loading, error, records } = useSelector((state) => state.types)
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])
    return (
        <>
            <Hero />
            <Types records={records} />
            <AppStore/>
        </>
    )
}

export default Home
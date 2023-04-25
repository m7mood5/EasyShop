import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { motion } from 'framer-motion';
import style from "./Header.module.css"
import { Link, NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';
import { totalCartQuantity } from '../../store/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toast';


const pages = [ 'about'];

function Header() {

    const showToastMessage = () => {
        toast.success('Sent Successfully 😉', {
            position: toast.POSITION.TOP_RIGHT
        });
    }


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const total = useSelector(totalCartQuantity)
    return (
        <AppBar position="static"
            elevation={0}
            sx={{ color: '#FFFFFF', backgroundColor: '#152425' }}
        >

            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.4,
                }}
                className='header'
            >

                <Container maxWidth="xl">

                    <Toolbar disableGutters>
                        <ShoppingBagIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, marginLeft: 15 }} />
                        <NavLink to="/">
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    color: "#d4bb93"
                                }}
                            >
                                EASY<span style={{ color: "#217A7E" }}>SHOP</span>
                            </Typography>
                        </NavLink>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <NavLink to={`/${page}`} key={page}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <ShoppingBagIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <NavLink to="/">
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    color: "#d4bb93"
                                }}
                            >
                                EASY<span style={{ color: "#217A7E" }}>SHOP</span>
                            </Typography>
                        </NavLink>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center", margin: "auto" }}>
                            <NavLink to="/">
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block', margin: 2 }}
                                >
                                    Home
                                </Button>
                            </NavLink>
                            {pages.map((page) => (
                                <NavLink to={`/${page}`} key={page}>
                                    <Button

                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block', margin: 2 }}
                                    >
                                        {page}
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, marginRight: { xs: 2, md: 25 } }}>
                            <Link to="shopping-cart">
                                <div className={style.cart}>
                                    <Grid container spacing={0.5}>
                                        <Grid item xs={3}>
                                            <div>
                                                <ShoppingCartIcon className={style.total} fontSize="small" />
                                            </div>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div className={style.ctotal}>
                                                <div className={style.din}>
                                                    {total}
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} />

                                    </Grid>
                                </div>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </motion.div>
        </AppBar>
    );
}
export default Header;

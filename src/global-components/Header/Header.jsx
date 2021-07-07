import React from 'react'
import styles from './Header.module.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from '../../containers/About';
import Produce from '../../containers/Produce';
import Product from '../Product';
import Cart from '../../containers/Cart';
import Home from '../../Home';


const Header = () => {
    return (
        <>
            <header>
            
            <BrowserRouter>
            <nav className={styles.nav}>
                    <Link to='/about' className={styles.nav__link}>
                        <svg width="42" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0C9.45 0 0 9.45 0 21V42H42V21C42 9.45 32.55 0 21 0ZM21 4.2C27.09 4.2 32.424 7.476 35.364 12.348C34.461 12.495 33.516 12.6 32.55 12.6C26.46 12.6 21.126 9.324 18.186 4.452C19.089 4.305 20.034 4.2 21 4.2ZM12.768 6.363C11.4429 10.3122 8.70574 13.6327 5.082 15.687C6.40708 11.7378 9.14426 8.41732 12.768 6.363V6.363ZM4.2 20.706C9.66 18.648 14.049 14.427 16.254 9.051C18.2236 11.4726 20.7083 13.4246 23.5273 14.765C26.3462 16.1055 29.4286 16.8007 32.55 16.8C34.125 16.8 35.637 16.611 37.107 16.296C37.548 17.787 37.8 19.362 37.8 21C37.8 30.261 30.261 37.8 21 37.8C11.739 37.8 4.2 30.261 4.2 21V20.706ZM4.2 37.8V33.6C5.397 35.175 6.825 36.603 8.4 37.8H4.2ZM37.8 37.8H33.6C35.175 36.603 36.603 35.175 37.8 33.6V37.8ZM24.675 23.1C24.675 22.4038 24.9516 21.7361 25.4438 21.2438C25.9361 20.7516 26.6038 20.475 27.3 20.475C27.9962 20.475 28.6639 20.7516 29.1562 21.2438C29.6484 21.7361 29.925 22.4038 29.925 23.1C29.925 23.7962 29.6484 24.4639 29.1562 24.9562C28.6639 25.4484 27.9962 25.725 27.3 25.725C26.6038 25.725 25.9361 25.4484 25.4438 24.9562C24.9516 24.4639 24.675 23.7962 24.675 23.1ZM12.075 23.1C12.075 22.4038 12.3516 21.7361 12.8438 21.2438C13.3361 20.7516 14.0038 20.475 14.7 20.475C15.3962 20.475 16.0639 20.7516 16.5562 21.2438C17.0484 21.7361 17.325 22.4038 17.325 23.1C17.325 23.7962 17.0484 24.4639 16.5562 24.9562C16.0639 25.4484 15.3962 25.725 14.7 25.725C14.0038 25.725 13.3361 25.4484 12.8438 24.9562C12.3516 24.4639 12.075 23.7962 12.075 23.1V23.1Z" fill="#21B1D7"/>
                        </svg>
                    </Link>
                    <Link to='/produce' className={styles.nav__link}>
                        <img src='https://api.iconify.design/carbon:fruit-bowl.svg?color=%2321B1D7'></img>
                    </Link>
                    <Link to='/cart' className={styles.nav__link}>
                        <img src='https://api.iconify.design/ant-design:shopping-cart-outlined.svg?color=%2321B1D7'></img>
                    </Link>
                </nav>
                <Link to='/' className={styles.title}>
                    the local farm
                </Link>
                <Switch>
                    <Route exact path='/about'>
                    <About />
                    </Route>
                    <Route path='/produce/:id'>
                    <Product />
                    </Route>
                    <Route exact path='/produce'>
                    <Produce />
                    </Route>
                    <Route exact path='/cart'>
                    <Cart />
                    </Route>
                    <Route exact path='/'>
                    <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
            </header>
        </>
    )
}

export default Header;

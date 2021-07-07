// import React from 'react'
import styles from './Home.module.scss';
import { BrowserRouter, Link, Switch, Route, useRouteMatch  } from 'react-router-dom';
import Favourites from './containers/Favourites';
import About from '../containers/About';


const Home = () => {
    const { path } = useRouteMatch();
    return (
        <>
            <div className={styles.landing}>
                <p className={styles.landing__title}>we farm <br /> sustainably</p>
                <div>
                {/* not working: */}
                <BrowserRouter>
                    <Link to='/about' className={styles.landing__subtitle}>find out how</Link>
                    <Switch>
                        <Route path={`${path}/about`}>
                            <About />
                        </Route>
                    </Switch>
                </BrowserRouter>
                </div>
                <img src="https://i.graphicmama.com/uploads/2016/6/576951ed6d8cd-dianne-at-the-farm2.png" className={styles.landing__img} alt='Cartoon farmhouse' />
            </div>
            <Favourites />
        </>
    )
}

export default Home


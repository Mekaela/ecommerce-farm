import React from 'react';
import styles from './Favourites.module.scss';
import Products from '../../../global-components/Products';

const Favourites = () => {
    return (
        <>
            <div className={styles.favourites}>
                <p className={styles.favourites__title}>our favourites</p>
            </div>
            <Products />
        </>
    )
}

export default Favourites

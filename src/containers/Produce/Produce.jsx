import React from 'react';
import styles from './Produce.module.scss';
import Products from '../../global-components/Products';

const Produce = () => {
    return (
        <>
            <div className={styles.produce}>
                <h2 className={styles.produce__title}>Our produce</h2>
                <p className={styles.produce__subtitle}>Organic, local and environmentally beneficial</p>
            </div>
            <Products />
        </>
    )
}

export default Produce;
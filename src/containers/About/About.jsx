// import React from 'react'
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.about}>
            <h2 className={styles.about__title}>The local farm Story</h2>
            <img className={styles.about__img} src="https://abundantpermaculture.com/wp-content/uploads/2015/03/kitchen-garden6-680x378.jpg" />
            <p className={styles.about__paragraph}>The local farm started from a desire to combine bushland restoration and agricultural production. Many new and exciting technologies in the agricultural space were taking agriculture out of nature, for example. vertical farming in large warehouses. Best practice in bushland restoration was taking farming land and converting it to bushland, perhaps leaving some area for a building envelope, which reduces the food producing capabilities of the land. Permaculture appealed to us, but we're also technologists and wanted to restore native bushland as well so that didn't quite suit either.</p> 
            <p className={styles.about__paragraph}>We combine outdoor vertical farming with fruit trees, chicken egg production with bushland restoration, and much more. In the process we bring a diverse range of products to locals, and new technologies to farmers, consumers, and scientists. Our restored bushland is some of the only in Australia to never need chemical pest or weed treatment, due to our unique grazing of chickens. </p>
            <p className={styles.about__paragraph}>Our farm is a research space, innovation hub and farm. We welcome people from all walks of life to visit and learn from our farm. For scientists, education institutions, locals and farmers we offer free tours. For everyone else we offer short term stays, and multi-week 'work and learn' experiences.</p>
        </div>
    )
}

export default About;

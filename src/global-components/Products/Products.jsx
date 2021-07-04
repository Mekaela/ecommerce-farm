import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProducts } from '../../Data/Data';
import styles from './Products.module.scss';

//
const useQuery = () => {
    // console.log(useLocation());
    return new URLSearchParams(useLocation().search);
};

const Products = () => {
    // setting products and query variables to push to, setProducts to set value of products.
    const [products, setProducts] = useState([]);
    const query = useQuery();

    useEffect(() => {
        const getData = async () => {
            const rawLimit = query.get('limit');
            const limit = rawLimit ? parseInt(rawLimit) : undefined;

            const rawPrice = query.get("price");
            const price = rawPrice ? parseInt(rawPrice) : undefined;

            const data = await getProducts(limit, price);
            setProducts(data);
        }
        //call getData
        getData();
    }, []);


    return (
        <>
            {products.map((product) => (
                // make sure key is on top level
                <div key={product.id} className={styles.product}>
                    <div  className={styles.product__container}>
                        <img className={styles.product__image} src={product.imgURL} alt={product.name} />
                        <h1 className={styles.product__title}>{product.name}</h1>
                        {/* need link to product here */}
                        <p className={styles.product__price}>${product.price}</p>
                    </div>
                </div>
            ))}  
        </>
    );
};

export default Products;

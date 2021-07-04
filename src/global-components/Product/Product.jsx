import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../Data/Data';
import styles from './Product.module.scss';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const data = await getProduct(id);
            setProduct(data);
        };
        getData();
    }, []);

    return (
        <>
            {product ? (
                <div>
                    <div  className={styles.product}>
                        <img className={styles.product__image} src={product.imgURL} alt={product.name} />
                        <h1 className={styles.product__title}>{product.name}</h1>
                        <p className={styles.product__price}>${product.price}</p>
                        <p className={styles.product__description}>{product.description}</p>
                    </div>
                    
                </div>
            ) : (
                <p>
                    Loading...
                </p>
            )}
        </>
    );
};

export default Product

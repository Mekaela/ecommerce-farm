import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCartProducts, getProducts, updateCartProduct, addCartProduct } from '../../Data/Data';
import styles from './Products.module.scss';
// import Counter from '../Counter';

//
const useQuery = () => {
    // console.log(useLocation());
    return new URLSearchParams(useLocation().search);
};

const Products = () => {
    // setting products and query variables to push to, setProducts to set value of products.
    const [products, setProducts] = useState([]);
    const query = useQuery();
    // const [count, setCount] = useState(start);

    const getData = async () => {
        const rawLimit = query.get('limit');
        const limit = rawLimit ? parseInt(rawLimit) : undefined;


        const data = await getProducts(limit);
        const cartData = await getCartProducts();
        console.log("data ", data);
        if (cartData.length > 0) {
            cartData.map((cartProduct) => { 
                let product = data.find(d => d.id === cartProduct.id);
                product.count = cartProduct.count;
            });
        }
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        //call getData
        getData();
    }, []);

    const handleIncrement = async (event) => {
        const data = await getCartProducts();
        const currentProduct = data.find((a) => a.id === event);
        console.log("current product is ", currentProduct);
        if (!currentProduct) {
            addCartProduct(event);
        } else {
            currentProduct.count++;
            updateCartProduct(currentProduct);
        }
        getData();
    };

    const handleDecrement = (event) => {
        // if (count > 0) {
        //     // setCount(count - 1);
        // }
        // return count;
    };

    return (
        <>
            {products.map((product) => (
                // make sure key is on top level
                <div key={product.id} className={styles.product}>
                    <div  className={styles.product__container}>
                        <Link to={`/produce/${product.id}`} className={styles.product__link}>
                            <img className={styles.product__image} src={product.imgURL} alt={product.name} />
                            <h1 className={styles.product__title}>{product.name}</h1>
                            <p className={styles.product__price}>${product.price}</p>
                        </Link>
                        <div className={styles.counter}>
                            <button className={styles.counter__button} onClick={handleDecrement}> - </button>
                            <div className={styles.counter__value}>{product.count}</div>
                            <button className={styles.counter__button} onClick={() => handleIncrement(product.id)}> + </button>
                        </div>
                    </div>
                </div>
            ))}  
        </>
    );
};

export default Products;

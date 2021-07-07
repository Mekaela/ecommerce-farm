import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCartProducts, getProducts, updateCartProduct, addCartProduct } from '../../Data/Data';
import styles from './Products.module.scss';
// import Counter from '../Counter';
import style from './Counter.module.scss';

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
        // console.log(data);
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

    const handleDecrement = async (event) => {
        const data = await getCartProducts();
        const currentProduct = data.find((a) => a.id === event);
        console.log("current product is ", currentProduct);
        if (!currentProduct) {
            addCartProduct(event);
        } else if (currentProduct.count === 0) {
            return;
        }
        else {
            currentProduct.count--;
            updateCartProduct(currentProduct);
        }
        getData();
    };

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className={styles.product}>
                    <div  className={styles.product__container}>
                        <Link to={`/produce/${product.id}`} className={styles.product__link}>
                            <img className={styles.product__image} src={product.imgURL} alt={product.name} />
                            <h1 className={styles.product__title}>{product.name} </h1>
                            <p className={styles.product__price}>${product.price}</p>
                        </Link>
                        {/* <Count onchange={}/> */}
                        <div className={style.counter}>
                        <p className={style.counter__title}>Add to cart </p>
                            <button className={style.counter__button} onClick={() => handleDecrement(product.id)}> - </button>
                            <div className={style.counter__value}>{product.count}</div>
                            <button className={style.counter__button} onClick={() => handleIncrement(product.id)}> + </button>
                        </div>
                    </div>
                </div>
            ))}  
        </>
    );
};

export default Products;

import { useEffect, useState } from 'react';
// import Products from '../../global-components/Products';
import styles from './Cart.module.scss';
import { getCartProducts, getProducts } from '../../Data/Data';

// we want items with name, and price. find items from Products that are in cart? Or import cart items in, but then also need count again.
// We want total price, which is updated when new items are added. 
const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    
    const getData = async () => {
        const cartData = await getCartProducts();
        const data = await getProducts();
        // console.log("cart data ", cartData);

        if (cartData.length > 0) {
            cartData.map((cartProduct) => { 
                let product = data.find(d => d.id === cartProduct.id);
                cartProduct.name = product.name;
                cartProduct.price = product.price * cartProduct.count;
            });
        }
        setCartProducts(cartData);
    };

    useEffect(() => {
        let cartTotal = cartProducts.reduce((acc, cartItem) => {
            return acc + cartItem.price;
        }, 0);
        setTotal(cartTotal)
    }, [cartProducts]);

    useEffect(() => {
        //call getData
        getData();
    }, []);

    const totalCount = (value) => {
        
        // quantity * price for each cart item
    };

    return (
        <>
            <div className={styles.cart}>
                {/* need to filter products */}
                <div className={styles.cart__product}>
                    <h5>Product</h5>
                    <h5>Quantity</h5>
                    <h5>Price</h5>
                </div>

                {cartProducts.map((product) => (
                    <div key={product.id} className={styles.cart__product}>
                        <p className={styles.product__title}>{product.name}</p>
                        <p className={styles.product__count}>{product.count}</p>
                        <p className={styles.product__price}>${product.price}</p>
                    </div>
                ))}
                <p className={styles.cart__total}>Total: ${total}</p>
            </div>
        </>
    );
};

export default Cart

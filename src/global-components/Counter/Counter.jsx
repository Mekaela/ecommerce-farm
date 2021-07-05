// import { useState } from 'react';
// import styles from './Counter.module.scss';

// const Counter = ({ start=0, productId }) => {
//     const [count, setCount] = useState(start);
//     const [productId, setProductId] = useState(productId);



//     const handleIncrement = (event) => {
//         const data = await getProducts();
//         setCount(count + 1);
//     };

//     const handleDecrement = (event) => {
//         if (count > 0) {
//             setCount(count - 1);
//         }
//         return count;
//     };

    

//     return (
//         <>
//             <div className={styles.counter}>
//                 <button className={styles.counter__button} onClick={handleDecrement}> - </button>
//                 <div className={styles.counter__value}>{count}</div>
//                 <button className={styles.counter__button} onClick={handleIncrement}> + </button>
//             </div>
//         </>
//     );
// };

// export default Counter;

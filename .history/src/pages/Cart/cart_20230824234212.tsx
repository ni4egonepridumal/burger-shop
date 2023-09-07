import styles from "./cart.module.scss";


export const CartPage = () => {
    return (
        <div className={styles.container}>
            Страница корзины
            <div style={{ width: "100%", height: "0", paddingBottom: "75%", position: "relative" }}><iframe src="https://giphy.com/embed/JB7gDgg1BKjRu" width="100%" height="100%" style={{ position: "absolute" }} frameBorder="0" allowFullScreen></iframe></div>
        </div>
    );
};

import styles from "./home.module.scss"

export const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.burger_head}>Выбери свой бургер</h1>
            <div className={styles.burger_item}>
                <div className={styles.burger_cart}>
                    <img src="./burgerImg/light.png" />
                    <div>
                        <p>Название</p>
                        <div>
                            <p>price</p>
                            <p>weight</p>
                        </div>
                    </div>

                    <p>Подробнее</p>
                </div>
            </div>
        </div>
    );
};


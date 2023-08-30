import styles from "./footer.module.scss";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <a href={"https://t.me/ni4egonepridumal"}>
                    <img
                        src='./img/Telegram-Logo.png'
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>
                <a href="#">
                    <img
                        src='./img/LinkedIn-Logo.png'
                        width={100}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>

                <a href={"https://github.com/ni4egonepridumal"}>
                    <img
                        src='./img/GitHub-Logo.png'
                        width={57}
                        height={57}
                        alt="Picture of the author"
                    />
                </a>
            </div>
        </div>
    );
};


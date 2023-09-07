import styles from "./footer.module.scss";
import GIT from "../../assets/GitHub-Logo.png";
import TG from "../../assets/Telegram-Logo.png"


export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <a href={"https://t.me/ni4egonepridumal"}>
                    <img
                        src={TG}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                </a>

                <img
                    src={GIT}
                    width={100}
                    height={50}
                    alt="Picture of the author"
                />

                <a href={"https://github.com/ni4egonepridumal"}>
                    <img
                        src={GIT}
                        width={57}
                        height={57}
                        alt="Picture of the author"
                    />
                </a>
            </div>
        </div>
    );
};


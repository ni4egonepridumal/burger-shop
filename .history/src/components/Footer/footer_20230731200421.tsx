import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <Link href={"https://t.me/ni4egonepridumal"}>
                    <Image
                        src="/Telegram-Logo.png"
                        width={50}
                        height={50}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </Link>

                <Image
                    src="/LinkedIn-Logo.png"
                    width={100}
                    height={50}
                    alt="Picture of the author"
                    loading="lazy"
                />

                <Link href={"https://github.com/ni4egonepridumal"}>
                    <Image
                        src="/GitHub-Logo.png"
                        width={57}
                        height={57}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </Link>
            </div>
        </div>
    );
};


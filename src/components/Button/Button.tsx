import styles from "./Button.module.scss";
import cn from "classnames";

interface IButtonProps {
    children: React.ReactNode
    viev: string
    type?: string
    size: string
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({
    children,
    viev,
    size,
    onClick,
}) => {
    return (
        <button
            className={cn(styles.btn, {
                [styles.primary]: viev === "primary",
                [styles.secondary]: viev === "secondary",
                [styles.small]: size === "s",
                [styles.medium]: size === "m",
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
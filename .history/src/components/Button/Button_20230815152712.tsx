import styles from "./Button.module.css";
import cn from "classnames";

interface IButtonProps {
    children: React.ReactNode
    type: string
    size: string
    onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({
    children,
    type,
    size,
    onClick,
}) => {
    return (
        <button
            className={cn(styles.btn, {
                [styles.primary]: type === "primary",
                [styles.secondary]: type === "secondary",
                [styles.small]: size === "s",
                [styles.medium]: size === "m",
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
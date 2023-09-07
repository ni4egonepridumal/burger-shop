import styles from "./Button.module.scss";
import cn from "classnames";

interface IButtonProps {
    children: React.ReactNode
    type: string
    size: string
    onClick?: () => void
    className?: string
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
import styles from './feedback.module.scss';

interface IFeedback {
    itemComment: { name: string, comment: string }
}
export const Feedback: React.FC<IFeedback> = ({ itemComment }) => {

    return (
        <div className={styles.feedback}>
            <div className={styles.text}>{itemComment.name} пишет...</div>
            <div>{itemComment.comment}</div>
        </div>
    );
};


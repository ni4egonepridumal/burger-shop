import styles from './feedback.module.scss';

interface IFeedback {
    comment: { name: string, comment: string }
}
export const Feedback: React.FC<IFeedback> = ({ comment }) => {
    return (
        <div className={styles.feedback}>
            <p className={styles.text}>{comment.name} пишет...</p>
            <p>{comment.comment}</p>
        </div>
    );
};


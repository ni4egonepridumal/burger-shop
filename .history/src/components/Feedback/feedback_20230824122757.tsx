import styles from './feedback.module.scss';

interface IFeedback {
    name: string, comment: string
}
export const Feedback: React.FC<IFeedback> = ({ comments }) => {
    console.log(comments)
    return (
        <div className={styles.feedback}>
            <p className={styles.text}>{comments.name} пишет...</p>
            <p>{comments.comment}</p>
        </div>
    );
};


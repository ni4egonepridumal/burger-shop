import styles from './feedback.module.scss';

interface IFeedback {
    comments: { name: string, comment: string }
}
export const Feedback: React.FC<IFeedback> = ({ comments }) => {
    console.log(comments)
    return (
        <div className={styles.feedback}>
            <p>{comments.name} пишет...</p>
            <p>{comments.comment}</p>
        </div>
    );
};


import styles from './feedback.module.scss';

interface IFeedback {
    itemComment: { name: string, comment: string }
}
export const Feedback: React.FC<IFeedback> = ({ itemComment }) => {

    return (
        <div className={styles.feedback}>
            <p className={styles.text}>{itemComment.name} пишет...</p>
            <p>{itemComment.comment}</p>
        </div>
    );
};



interface IFeedback {
    comments: { name: string, comment: string }
}
export const Feedback: React.FC<IFeedback> = ({comments}) => {
    return (
        <div>
            отзыв
        </div>
    );
};


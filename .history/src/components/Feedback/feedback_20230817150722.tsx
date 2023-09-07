
interface IFeedback {
    comments: { name: string, comment: string }
}
export const Feedback: React.FC<IFeedback> = ({ comments }) => {
    console.log(comments)
    return (
        <div>
            отзыв
        </div>
    );
};


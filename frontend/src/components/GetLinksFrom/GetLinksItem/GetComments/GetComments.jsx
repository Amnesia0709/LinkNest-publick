import classes from "./GetComments.module.scss";

const GetComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={index} className={classes.comment}>
          {comment}
        </p>
      ))}
    </div>
  );
};

export default GetComments;

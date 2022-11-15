import './CourseGoalItem.css';

const CourseGoalItem = ({ children, id, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;

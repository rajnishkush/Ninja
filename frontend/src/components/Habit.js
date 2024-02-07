import '../styles/Habit.css';

const Habit = ({ todo }) => {
    return (
        <div className="todo" key={todo._id}>
            <h2>{todo.title}</h2>
            <p>Reps: {todo.reps}</p>
            <p>{todo.createdAt}</p>
        </div>
    );
}

export default Habit;
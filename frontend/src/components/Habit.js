const Habit = ({ todo }) => {
    return (
        <div className="todo" key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.reps}</p>
        </div>
    );
}

export default Habit;
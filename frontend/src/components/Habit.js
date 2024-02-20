import '../styles/Habit.css';

const Habit = ({ habit }) => {
    return (
        <div className="habit" key={habit._id}>
            <h2>{habit.title}</h2>
            <p>Reps: {habit.reps}</p>
            <p>{habit.createdAt}</p>
        </div>
    );
}

export default Habit;
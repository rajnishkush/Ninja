import { useContext } from 'react';
import '../styles/Habit.css';
import HabitContext from '../context/HabitContext';

const Habit = ({ habit }) => {
    const { dataDispatch } = useContext(HabitContext);
    const deleteHandler = async () => {
        const response = await fetch(`http://localhost:3400/api/todos/${habit._id}`, {
            method: 'DELETE'
        });
        dataDispatch({ type: 'DELETE_HABIT', payload: habit._id });
        const json = await response.json();
        console.log(json);
    }
    return (
        <div className="habit" key={habit._id}>
            <h2>{habit.title}</h2>
            <p>Reps: {habit.reps}</p>
            <p>{habit.createdAt}</p>
            <span className="delete" onClick={deleteHandler}>X</span>
        </div>
    );
}

export default Habit;
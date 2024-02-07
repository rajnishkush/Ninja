import { useState } from 'react';
import '../styles/HabitForm.css';

const HabitForm = () => {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newHabit = { title, reps };
        const response = await fetch('http://localhost:3400/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHabit),
        });
        const json = await response.json();

        if (!response.ok) {
            setSuccess(null);
            setError(json.message);
        }
        else {
            setTitle('');
            setReps('');
            setError(null);
            setSuccess('New habit added!');
        }
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <h3>Add a new habit</h3>
            <label>Habit:</label>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Reps:</label>
            <input type="text"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
            />
            <button type="submit">Add Habit</button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
        </form>
    );
}

export default HabitForm;
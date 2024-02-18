import { useReducer } from 'react';
import '../styles/HabitForm.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        case 'SET_REPS':
            return { ...state, reps: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_SUCCESS':
            return { ...state, success: action.payload };
        default:
    }
}

const initalState = {
    title: '',
    reps: '',
    error: null,
    success: null
};

const HabitForm = () => {
    const [state, dispatch] = useReducer(formReducer, initalState);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newHabit = {
            title: state.title,
            reps: state.reps
        };
        const response = await fetch('http://localhost:3400/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHabit),
        });
        const json = await response.json();

        if (!response.ok) {
            dispatch({ type: 'SET_SUCCESS', payload: null })
            dispatch({ type: 'SET_ERROR', payload: json.message });
        }
        else {
            dispatch({ type: 'SET_TITLE', payload: '' })
            dispatch({ type: 'SET_REPS', payload: '' })
            dispatch({ type: 'SET_ERROR', payload: null })
            dispatch({ type: 'SET_SUCCESS', payload: 'New habit added!' });
        }
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        dispatch({ type: `SET_${name.toUpperCase()}`, payload: value })
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <h3>Add a new habit</h3>
            <label>Habit:</label>
            <input
                type="text"
                name='title'
                value={state.title}
                onChange={changeHandler}
            />
            <label>Reps:</label>
            <input
                type="text"
                name='reps'
                value={state.reps}
                onChange={changeHandler}
            />
            <button type="submit">Add Habit</button>
            {state.error && <div className="error">{state.error}</div>}
            {state.success && <div className="success">{state.success}</div>}
        </form>
    );
}

export default HabitForm;
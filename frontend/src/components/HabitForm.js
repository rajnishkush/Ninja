import { useReducer, useContext } from 'react';
import HabitContext from '../context/HabitContext';
import '../styles/HabitForm.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_SUCCESS':
            return { ...state, success: action.payload };
        default:
            return state;
    }
}

const initalState = {
    error: null,
    success: null
};

const HabitForm = () => {
    const { dataState, dataDispatch } = useContext(HabitContext);
    const [state, dispatch] = useReducer(formReducer, initalState);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        dataDispatch({ type: `SET_${name.toUpperCase()}`, payload: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const newHabit = {
            title: dataState.title,
            reps: dataState.reps
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
            dataDispatch({ type: 'SET_TITLE', payload: '' })
            dataDispatch({ type: 'SET_REPS', payload: '' })
            dispatch({ type: 'SET_ERROR', payload: null })
            dispatch({ type: 'SET_SUCCESS', payload: 'New habit added!' });
        }
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <h3>Add a new habit</h3>
            <label>Habit:</label>
            <input
                type="text"
                name='title'
                value={dataState.title}
                onChange={changeHandler}
            />
            <label>Reps:</label>
            <input
                type="text"
                name='reps'
                value={dataState.reps}
                onChange={changeHandler}
            />
            <button type="submit">Add Habit</button>
            {state.error && <div className="error">{state.error}</div>}
            {state.success && <div className="success">{state.success}</div>}
        </form>
    );
}

export default HabitForm;
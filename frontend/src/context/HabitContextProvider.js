import { useReducer } from "react";
import HabitContext from "./HabitContext";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        case 'SET_REPS':
            return { ...state, reps: action.payload };
        default:
            return state;
    }
}

const HabitContextProvider = ({ children }) => {
    const initalState = {
        title: '',
        reps: ''
    };
    const [dataState, dataDispatch] = useReducer(formReducer, initalState);
    return (
        <HabitContext.Provider value={{ dataState, dataDispatch }}>
            {children}
        </HabitContext.Provider>
    )
};

export default HabitContextProvider;
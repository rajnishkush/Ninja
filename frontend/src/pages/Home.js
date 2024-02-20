import { useReducer, useEffect, useContext } from "react";
import HabitContext from "../context/HabitContext";
import Habit from "../components/Habit";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";
import HabitForm from "../components/HabitForm";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HABITS':
      return { ...state, habits: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

const initalState = {
  habits: null,
  error: null,
  loading: true
}

const Home = () => {
  const { dataState } = useContext(HabitContext);
  const [state, dispatch] = useReducer(formReducer, initalState);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch('http://localhost:3400/api/todos');
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: 'SET_HABITS', payload: data });
        }
        else {
          throw new Error(data.message);
        }
      }
      catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
      finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchHabits();
  }, [dataState]);

  if (state.loading) return <Loader />;
  if (state.error) return <ErrorPage error={state.error} />;

  return (
    <div className="home">
      <div className="habits">
        {
          state.habits && state.habits.map(habit => (
            <Habit habit={habit} key={habit._id} />
          ))
        }
      </div>
      <HabitForm />
    </div>
  );
}

export default Home;
import { useState, useEffect } from "react";
import Habit from "../components/Habit";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";

const Home = () => {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3400/api/todos');
        const data = await response.json();
        if (response.ok) {
          setTodos(data);
        }
        else {
          throw new Error(data.message);
        }
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="home">
      <div className="todos">
        {
          todos && todos.map(todo => (
            <Habit todo={todo} key={todo._id} />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
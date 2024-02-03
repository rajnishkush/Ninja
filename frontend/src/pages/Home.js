import { useState, useEffect } from "react";


const Home = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:3400/api/todos');
      const data = await response.json();

      if (response.ok) {
        setTodos(data);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="home">
      <div className="todos">
        {todos && todos.map(todo => (
          <div className="todo" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
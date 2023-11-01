import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(data);
  return (
    <div className="App">
      <h1>Todo List</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

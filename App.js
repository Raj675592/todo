import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './MyToDo/Header';
import Form from './MyToDo/Form';
import ToDoList from './MyToDo/ToDoList';
//import App from './src/App'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {id: Date.now(), text, completed: false};
    setTodos([...todos, newTodo]);
  };
const toggleComplete = (id) => {
  setTodos(todos.map(todo => todo.id ? { ...todo, completed: !todo.completed } : todo));
};
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};


  return (
    <div className="App">
      {/* <header className="App-header">
        <div>{0-980980}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <header />
    <Form addTodo={addTodo} />
    <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

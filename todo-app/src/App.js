import './App.css';
import { useState } from 'react';

function App() {
  // create state variables
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    // stops page from reloading
    e.preventDefault();
    // check whether the input is not empty
    if (input.trim() !== '') {
      // add the task to the task list
      setTasks([...tasks, input]);
      // clear the input field after adding the task 
      setInput('');
    }
  };

  const deleteTask = (removeIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== removeIndex);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      
      <h1>
        To-do List
      </h1>

      <div className="body">
        <form className="todo-form" onSubmit={addTask}>
          <label for="inputItem" style={{fontWeight:"bold", fontSize:"20px"}}>Task: </label>
          <input 
            className="textBox"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
          />
          <button type="submit" className="addTask">Add</button>
        </form>

        <h2>Tasks to-do...</h2>

        <ul>
          {tasks.map((tasks, index) => (
            <li key={index} className="task">
              {"\u2192"} {tasks}
              <button className="deleteTask" onClick={() => deleteTask(index)}>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
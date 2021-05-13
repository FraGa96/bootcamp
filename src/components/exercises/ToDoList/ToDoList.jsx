import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  }

  const handleAddTask = () => {
    if (task && !items.find(item => item.task === task)) {
      setItems(prevItems => [...prevItems,
      {
        task,
        completed: false,
      }
      ]);
    }
  }

  const handleDelete = (taskToDelete) => () => {
    setItems(prevItems => [...prevItems.filter(item => item.task !== taskToDelete)]);
  };

  const handleEdit = () => { };

  const handleComplete = (taskToComplete) => () => {
    setItems(prevItems => {
      const itemToUpdate = {
        ...prevItems.find(item => item.task === taskToComplete),
        completed: true,
      }
      return [
        ...prevItems.filter(item => item.task !== taskToComplete),
        itemToUpdate
      ];
    });
  };

  return (
    <div>
      <div>
        <input type="text" value={task} onChange={handleTaskChange} />
        <button type="button" onClick={handleAddTask}>Add</button>
      </div>
      <div>
        {items.map(item => (
          <div key={item.task} className="Task">
            <span className={item.completed ? 'Task-done' : ''}>
              {item.task}
            </span>
            <div>
              <button onClick={handleDelete(item.task)}>delete</button>
              <button onClick={handleEdit}>edit</button>
              <button onClick={handleComplete(item.task)}>complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
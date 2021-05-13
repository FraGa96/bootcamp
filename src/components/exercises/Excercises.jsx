import React, { useState } from 'react';
import Sidebar from '../common/Sidebar/Sidebar';
import Counter from './Counter/CounterWithHooks';
import { excercisesEnum } from '../../utils/constants';
import './Excercises.css';
import ToDoList from './ToDoList/ToDoList';
import ApiExample from './ApiExample/ApiExample';

const items = [
  { title: 'Counter', id: excercisesEnum.COUNTER },
  { title: 'Task list', id: excercisesEnum.TASK_LIST },
  { title: 'Pokemon', id: excercisesEnum.POKEMON },
];

const Excercises = () => {
  const [actualExercise, setActualExercise] = useState(excercisesEnum.COUNTER);

  const handleChangeExcercise = (newExcercise) => {
    setActualExercise(newExcercise);
  };

  let content = null;
  switch (actualExercise) {
    case excercisesEnum.COUNTER:
      content = (
        <Counter maxValue={15}>
          <span>Hey you!</span>
        </Counter>
      )
      break;
    case excercisesEnum.TASK_LIST:
      content = <ToDoList />
      break;
    case excercisesEnum.POKEMON:
      content = <ApiExample />
      break;
    default:
      content = null;
  }

  return (
    <div className="Excercises">
      <Sidebar
        items={items}
        selected={actualExercise}
        onNav={handleChangeExcercise}
      />

      <main>
        {content}
      </main>
    </div>
  );
};

export default Excercises;
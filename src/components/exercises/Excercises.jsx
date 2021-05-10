import React, { useState } from 'react';
import Sidebar from '../common/Sidebar/Sidebar';
import Counter from './Counter/CounterWithHooks';
import { excercisesEnum } from '../../utils/constants';
import './Excercises.css';

const items = [
  { title: 'Counter', id: excercisesEnum.COUNTER },
  { title: 'Task list', id: excercisesEnum.TASK_LIST },
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
      {content}
    </div>
  );
};

export default Excercises;
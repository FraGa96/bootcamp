import React, { useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Sidebar from '../common/Sidebar/Sidebar';
import Counter from './Counter/CounterWithHooks';
import { excercisesEnum } from '../../utils/constants';
import './Excercises.css';
import ToDoList from './ToDoList/ToDoList';
import ApiExample from './ApiExample/ApiExample';

const Excercises = () => {
  const { url } = useRouteMatch();

  const items = useMemo(() => {
    return [
      { title: 'Counter', id: excercisesEnum.COUNTER, path: `${url}/counter` },
      { title: 'Task list', id: excercisesEnum.TASK_LIST, path: `${url}/taskList` },
      { title: 'Pokemon', id: excercisesEnum.POKEMON, path: `${url}/pokemon` },
    ]
  }, [url]);

  return (
    <div className="Excercises">
      <Sidebar items={items} />

      <main>
        <Switch>
          <Route exact path={[`${url}/`, `${url}/counter`]}>
            <Counter maxValue={15}>
              <span>Hey you!</span>
            </Counter>
          </Route>

          <Route path={`${url}/taskList`}>
            <ToDoList />
          </Route>

          <Route path={`${url}/pokemon`}>
            <ApiExample />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Excercises;
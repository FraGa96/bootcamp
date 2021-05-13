import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count < props.maxValue) {
      setCount(prevCount => prevCount + 1);
    }

    if (props.sayHi) {
      props.sayHi();
    }
  }

  useEffect(() => {
    console.log('did update');

    return () => {
      console.log('cleanup');
    };
  });

  useEffect(() => {
    console.log('count changed');

    return () => {
      console.log('run cleanup');
    };
  }, [count]);

  useEffect(() => {
    console.log('did mount');

    return () => {
      console.log('will unmount');
    };
  }, []);

  return (
    <div className="Counter">
      <h1>{count}</h1>

      <button
        className="Button"
        onClick={handleClick}
      >
        Click here
      </button>

      {count === props.maxValue
        ? <span className="Counter-error">You reach the limit</span>
        : null
      }

      <p>The max value is {props.maxValue}</p>

      {props.children}
    </div>
  );
}

export default Counter;
import React, { useEffect, useState } from 'react';

const BASE_API = 'https://pokeapi.co/api/v2/';
const ApiExample = () => {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(BASE_API + 'pokemon/ditto');
      const result = await response.json();
      console.log(result);
      setData(result);
    }
    callApi()
  }, []);

  return (
    <div>
      {data ? data.name : ''}
    </div>
  );
};

export default ApiExample;
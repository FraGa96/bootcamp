import React, { useEffect, useState, useCallback } from 'react';
import Pokemon from './Pokemon/Pokemon';
import Button from '../../common/Button/Button';
import './ApiExample.css';

const BASE_API = 'https://pokeapi.co/api/v2';
const ApiExample = () => {
  const [data, setData] = useState(null);
  const [pokemon, setPokemon] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [shiny, setShiny] = useState(false);
  const [back, setBack] = useState(false);

  const callApi = useCallback(async (pokemon) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API}/pokemon/${pokemon}`);

      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError('');
      } else {
        setData(null);
        setError('Something went wrong');
      }
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  }, []);


  useEffect(() => {
    callApi('ditto');
  }, [callApi]);

  const handleChangePokemon = (event) => {
    setPokemon(event.target.value);
  };

  const handleSearchPokemon = (event) => {
    event.preventDefault();
    callApi(pokemon);
  };

  const handleShiny = () => {
    setShiny(prevShiny => !prevShiny);
  };

  const handleFlip = () => {
    setBack(prevBack => !prevBack);
  };

  const images = data ? {
    back: data.sprites.back_default,
    backShiny: data.sprites.back_shiny,
    front: data.sprites.front_default,
    frontShiny: data.sprites.front_shiny,
  } : null;

  return (
    <div className="Api-example">
      <form onSubmit={handleSearchPokemon}>
        <input type="text" value={pokemon} onChange={handleChangePokemon} />

        <Button submit className="Search-pokemon">
          {loading ? 'Loading' : 'Search'}
        </Button>
      </form>

      {data
        ? (
          <Pokemon
            name={data.name}
            images={images}
            front={!back}
            shiny={shiny}
            onChangeType={handleShiny}
            onFlip={handleFlip}
          />
        )
        : null}

      <span>{error}</span>
    </div>
  );
};

export default ApiExample;
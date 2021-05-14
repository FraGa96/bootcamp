import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../common/Button/Button';
import './Pokemon.css';

const Pokemon = (props) => {
  let image = props.images.front;

  if (props.shiny && props.front) {
    image = props.images.frontShiny;
  } else if (props.shiny) {
    image = props.images.backShiny;
  } else if (!props.front) {
    image = props.images.back;
  }

  return (
    <div className="Pokemon">
      <Button onClick={props.onChangeType}>
        {props.shiny
          ? 'Switch to normal'
          : 'Switch to shiny'}
      </Button>

      <img src={image} alt="" />
      
      <span>{props.name}</span>

      <Button onClick={props.onFlip}>
        {props.front ? 'Back' : 'Front'}
      </Button>
    </div>
  );
};

Pokemon.propTypes = {
  front: PropTypes.bool.isRequired,
  images: PropTypes.shape({
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
    frontShiny: PropTypes.string.isRequired,
    backShiny: PropTypes.string.isRequired,
  }).isRequired,
  shiny: PropTypes.bool.isRequired,
  onFlip: PropTypes.func.isRequired,
  onChangeType: PropTypes.func.isRequired
};

export default Pokemon;
import React from 'react';
import Clickygame from 'clickygame';

const Card = ({ id, isFlipped, handleClick, cardNumber }) => (
  <Clickygame
    isFlipped={isFlipped}
    flipSpeedBackToFront={1}
    flipSpeedFrontToBack={1}
  >
    <button
      id={id}
      className={`card card-front ${cardNumber !== -1 ? '' : 'hide-card'}`}
      onClick={handleClick}
      key="front"
    ></button>

    <button
      id={id}
      className={`card card-back ${cardNumber !== -1 ? '' : 'hide-card'}`}
      onClick={handleClick}
      key="back"
    >
      {cardNumber}
    </button>
  </Clickygame>
);

export default Card;

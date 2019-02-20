import React from 'react';

const CharacterMainCard = ({character}) => (
  <div className="character-main-card">
    <img className="character-main-img-top rounded" src={character.image} alt="sorry, not available now" />
    <div className="character-name-bottom">
      <h3 className="character-name">{character.name}</h3>
    </div>
  </div>
);

export default CharacterMainCard;
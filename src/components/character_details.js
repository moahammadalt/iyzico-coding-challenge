import React from 'react';
import { connect } from 'react-redux';

const CharacterDetails = (props) => (
  <div className="col-md-11">
    <div className="col-md-6">
      <img className="character-img-left rounded" src={props.selectedCharacter.image} alt="sorry, not available now" />
    </div>
    <div className="col-md-6">
      <div className="character-details-right">

        {
          props.selectedCharacter.name &&
          <div className="character-detail-field border-bottom row">
            <label className="col-sm-4">
              NAME:
                  </label>
            <p className="col-sm-8">
              {props.selectedCharacter.name}
            </p>
          </div>
        }

        {
          props.selectedCharacter.origin &&
          props.selectedCharacter.origin.name &&
          <div className="character-detail-field border-bottom row">
            <label className="col-sm-4">
              ORIGIN:
                  </label>
            <p className="col-sm-8">
              {props.selectedCharacter.origin.name}
            </p>
          </div>
        }

        {
          props.selectedCharacter.episodesList &&
          props.selectedCharacter.episodesList.length > 0 &&
          <div className="character-detail-field border-bottom row">
            <label className="col-sm-4">
              EPISODES:
                </label>
            <div className="col-sm-8">
              {props.selectedCharacter.episodesList && props.selectedCharacter.episodesList.map((episode, index) => (
                <p key={index}>{episode.name}</p>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  </div>
);

export default connect(state => state, {})(CharacterDetails);
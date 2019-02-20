import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacter, getEpisode } from 'rickmortyapi';
import CharacterDetails from '../components/character_details';
import BackButton from '../components/back_button';
import { handleError, checkValue } from '../globals/helper';

class CharacterDetailsContainer extends Component {

  async componentDidMount() {    

    let episodesIds = [];
    let episodesList = [];
    let characterDetails = [];
    this.props.setLoadingSpinnerStatus(true);
    this.props.setEpisodesLimit(5);

    try {
      if(!this.props.selectedCharacter.id){  // get character details when the page is first opened directly from getCharacter api       
  
        characterDetails = await getCharacter([this.props.match.params.id]);
        episodesIds = this.getEpisodesIds(characterDetails); // extract episodes ids from episodes array urls
        episodesList = await getEpisode(episodesIds); // get episodes list from getEpisode api
      }
      else{ // character details are already exist from the previous component (HomeContainer) 
        characterDetails = this.props.selectedCharacter;
        episodesIds = this.getEpisodesIds(characterDetails); // extract episodes ids from episodes array urls
        episodesList = await getEpisode(episodesIds); // get episodes list from getEpisode api
      }

      // here making sure episodesList are always array type variable 
      // why checking? because when the episodes are only one item, the api returns an object instead of array
      episodesList = episodesList instanceof Array ? episodesList : [episodesList];
      this.props.setSelectedCharacter({...characterDetails,  episodesList}); // dispatch SET_SELECTED_CHARACHATER action
      this.props.setLoadingSpinnerStatus(false);
    }
    catch(err) {
      handleError(err);
    }
    
  }

  componentWillUnmount(){
    // make sure that always selectedCharacter reducer is only full of data when the charecter details page is open
    this.props.setSelectedCharacter({}); 
  }

  getEpisodesIds(characterDetails) { // returns an array of ids like [1, 6, 4, etc...]
    if(!checkValue(characterDetails.episode) || !(characterDetails.episode  instanceof Array)){
      return [];
    }

    return characterDetails.episode.slice(characterDetails.episode.length - this.props.episodesLimit, characterDetails.episode.length).map(url => url.split('/').pop());
  }

  render() {
    return (
      <div className="character-container">
        { this.props.loadingSpinner ? <div className="loading"></div> : null }
        <BackButton to='/' />
        {
          checkValue(this.props.selectedCharacter) &&
          <CharacterDetails />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCharacter: (obj) => {
      dispatch({
        type: 'SET_SELECTED_CHARACHATER',
        payload: obj
      });
    },
    setLoadingSpinnerStatus: (val) => {
      dispatch({
        type: 'SET_LOADING_SPINNER_STATUS',
        payload: val
      })
    },
    setEpisodesLimit: (val) => {
      dispatch({
        type: 'SET_EPISODES_LIMIT',
        payload: val
      })
    }
  };
};

export default connect(state => state, mapDispatchToProps)(CharacterDetailsContainer);
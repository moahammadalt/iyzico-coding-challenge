import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { getCharacter } from 'rickmortyapi';
import CharacterMainCard from '../components/character_main_card';
import { handleError, checkValue } from '../globals/helper';
import { connect } from 'react-redux';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
  
    this.handleScroll = this.handleScroll.bind(this);
    this.fetchCharactersData = this.fetchCharactersData.bind(this);
    this.handleCharacterCardClick = this.handleCharacterCardClick.bind(this);
  }

  componentDidMount() {
    
    window.addEventListener('scroll', this.handleScroll);
    // this is for setting the scroller on the place where it left from
    setTimeout(() => window.scrollTo(0, this.props.scrollIndicator), 0)

    if(this.props.charactersList.length === 0){ // only fetch character data when the store is empty of character data
      this.fetchCharactersData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  fetchCharactersData() {
    this.props.setLoadingSpinnerStatus(true);
    getCharacter({ page: this.props.charactersPageNumber }).then(data => {

      this.props.setCharacterList([...this.props.charactersList, ...data.results]);
      this.props.setCharactersPageNumber(checkValue(data.info.next) ? (this.props.charactersPageNumber + 1) : false);
      this.props.setLoadingSpinnerStatus(false);

    }).catch(err => handleError(err));
  }

  handleScroll() {
    // stop handling scroll event when the character data is on loading or if the pageNumber is over in api 
    if (!this.props.charactersPageNumber || this.props.loadingSpinner) { return; }

    if ((window.innerHeight + window.scrollY) >= this.refs.homeRef.offsetHeight) {
      this.fetchCharactersData();
    }
  }

  handleCharacterCardClick(character) {
    this.props.setSelectedCharacter(character);
    this.props.setScrollIndicator(window.scrollY);
  }

  render() {
    return (
      <div className="home-container" ref="homeRef">

        { this.props.loadingSpinner ? <div className="loading"></div> : null }
        
        <div className="container p-t-30">
          {this.props.charactersList.map((character, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <Link onClick={() => this.handleCharacterCardClick(character) } to={`/character/${character.id}`} className="character-main-card">
                <CharacterMainCard character={character} />
              </Link>
            </div>
          ))}
        </div>

        { !this.props.charactersPageNumber ? <h1 className="text-center c-w m-b-30">The End.</h1> : null }
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacterList: (arr) => {
      dispatch({
        type: 'SET_CHARACTERS_LIST',
        payload: arr
      });
    },
    setCharactersPageNumber: (val) => {
      dispatch({
        type: 'SET_CHARACTERS_PAGE_NUMBER',
        payload: val
      });
    },
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
    setScrollIndicator: (val) => {
      dispatch({
        type: 'SET_SCROLL_INDICATOR',
        payload: val
      })
    }
  };
};

export default connect(state => state, mapDispatchToProps)(HomeContainer);

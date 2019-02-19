import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeContainer from '../../src/containers/home_con';
import CharacterMainCard from '../../src/components/character_main_card';

const mockStore = configureStore();
  
const initialState = {
  charactersList: [],
  selectedCharacter: {},
  charactersPageNumber: 1,
  loadingSpinner: false
};

const setInitialState = state => state ? {...initialState, ...state} : {...initialState};

describe('First scenario: when the home page first opens', () => {


  it('should render loading spinner div when loadingSpinner prop is changed', () => {
    
    const store = mockStore(setInitialState({loadingSpinner: true}));

    const wrapper = mount(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );

    expect(wrapper.find('.loading').exists()).toBeTruthy();
  });

  it('Should has no CharacterMainCard', () => {
    
    const store = mockStore(setInitialState());

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <HomeContainer />
        </Provider>
      </Router>
    );

    expect(wrapper.find(CharacterMainCard).length).toBe(0);
  });

});

describe('Second scenario: when the home page loads data', () => {

  it('Should has CharacterMainCard when charactersList.length is bigger than 0 and should match the list length', () => {

    const charactersList = [
      {
        id: 1,
        name: "Rick Sanchez",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2"
        ],
        origin: {
          name: "Earth (C-137)"
        },
        species: "Human",
        status: "Alive",
        url: "https://rickandmortyapi.com/api/character/1"
      }
    ];

    const store = mockStore(
      setInitialState({charactersList})
    );

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <HomeContainer />
        </Provider>
      </Router>
    );

    expect(wrapper.find(CharacterMainCard).length).toBe(1);

    expect(wrapper.find(CharacterMainCard).length).toBe(charactersList.length);

  });

});

/*describe('Third scenario: when characted card is being clicked', () => {

  const store = mockStore(
    setInitialState({charactersList: [{}]})
  );

  const wrapper = mount(
    <Router>
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    </Router>
  );

  it('Should render to character detail componenet when clicking on character card', () => {

    wrapper.find('.character-main-card').simulate('click');

    wrapper.update();

    expect(wrapper.find('.character-container').length).toBe(1);

  });
});*/
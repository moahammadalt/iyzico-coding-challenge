import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CharacterDetailsContainer from '../../src/containers/character_details_con';
import BackButton from '../../src/components/back_button';

const mockStore = configureStore();
  
const initialState = {
  loadingSpinner: false,
  selectedCharacter: {}
};

const setInitialState = state => state ? {...initialState, ...state} : {...initialState};

describe('First scenario: when the character details page first opens', () => {

  it('should render loading spinner div when loadingSpinner prop is changed', () => {
    
    const store = mockStore(setInitialState({loadingSpinner: true}));

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharacterDetailsContainer />
        </Provider>
      </Router>
    );

    expect(wrapper.find('.loading').exists()).toBeTruthy();
  });

  it('should render back button componenet', () => {
    
    const store = mockStore(setInitialState());

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharacterDetailsContainer />
        </Provider>
      </Router>
    );

    expect(wrapper.find(BackButton).exists()).toBeTruthy();
  });

  it('should render CharacterDetails componenet when selectedCharacter prop is not empty', () => {
    
    const store = mockStore(
      setInitialState({
        selectedCharacter: {
          name: 'test'
        }
      })
    );

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharacterDetailsContainer />
        </Provider>
      </Router>
    );

    expect(wrapper.find(BackButton).exists()).toBeTruthy();
  });

});



// Snapshots
describe('<CharacterDetailsContainer /> Snapshot test for character details components', () => {

  it('Should match the CharacterDetailsContainer snapshot before character data loading', () => {

    const store = mockStore(setInitialState());

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharacterDetailsContainer />
        </Provider>
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should match the CharacterDetailsContainer snapshot after character data loading', () => {

    const store = mockStore(
      setInitialState({
        selectedCharacter: {
          name: 'test'
        }
      })
    );

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharacterDetailsContainer />
        </Provider>
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
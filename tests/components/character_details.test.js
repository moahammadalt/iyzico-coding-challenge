import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CharacterDetails from '../../src/components/character_details';

const mockStore = configureStore();
  
const initialState = {
  selectedCharacter: {}
};

let selectedCharacter = {
  id: '1',
  name: 'test',
  origin: {
    name: 'test'
  },
  episodesList: [
    {name: 'test1'},
    {name: 'test2'}
  ]
}

const setInitialState = state => state ? {...initialState, ...state} : {...initialState};

// Snapshots
describe('<CharacterDetails /> Snapshot test for CharacterDetails component', () => {

  it('Should match the CharacterDetails snapshot when there is no character data', () => {

    const store = mockStore(setInitialState());

    const wrapper = shallow(
      <Provider store={store}>
        <CharacterDetails />
      </Provider>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should match the CharacterDetails snapshot when there is character data', () => {

    const store = mockStore(
      setInitialState({ selectedCharacter })
    );

    const wrapper = shallow(
      <Provider store={store}>
        <CharacterDetails />
      </Provider>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
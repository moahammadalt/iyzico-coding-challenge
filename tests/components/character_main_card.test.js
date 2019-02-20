import React, { Component } from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CharacterMainCard from '../../src/components/character_main_card.js';


// Snapshots
describe('<CharacterMainCard /> Snapshot test for CharacterMainCard component', () => {

  it('Should match the CharacterMainCard snapshot when character data is empty', () => {

    const wrapper = shallow(<CharacterMainCard character={{}} />);

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should match the CharacterMainCard snapshot when character data is not empty', () => {

    const wrapper = shallow(<CharacterMainCard character={{name: 'test', image: 'test'}} />);

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
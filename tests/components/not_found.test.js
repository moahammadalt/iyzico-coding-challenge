import React, { Component } from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NotFound from '../../src/components/not_found';


// Snapshots
describe('<NotFound /> Snapshot test for NotFound component', () => {

  it('Should match the NotFound snapshot', () => {

    const wrapper = shallow(<NotFound />);

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
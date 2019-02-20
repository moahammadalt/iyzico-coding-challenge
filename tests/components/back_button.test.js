import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BackButton from '../../src/components/back_button';


// Snapshots
describe('<BackButton /> Snapshot test for BackButton component', () => {

  it('Should match the BackButton snapshot', () => {

    const wrapper = shallow(
      <Router>
        <BackButton />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
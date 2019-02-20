import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../src/components/header';


// Snapshots
describe('<Header /> Snapshot test for Header component', () => {

  it('Should match the Header snapshot', () => {

    const wrapper = shallow(
      <Router>
        <Header />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
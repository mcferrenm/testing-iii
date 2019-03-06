import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('matches snapshot', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  })
});
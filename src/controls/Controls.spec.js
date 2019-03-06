import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import "jest-dom/extend-expect";

import Controls from './Controls';

describe('<Controls />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('provides buttons to toggle closed and open states', () => {
    const { getByTestId } = render(<Controls />);

    const lockBtn = getByTestId(/lock-btn/i);
    const openBtn = getByTestId(/open-btn/i);

    expect(lockBtn).toBeInTheDocument();
    expect(openBtn).toBeInTheDocument();
  });
});
import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import About from '..';

const { cleanup, render } = require("@testing-library/react");

afterEach(cleanup)

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });

  it('matches snapshot DOM structure', () => {
    const { asFragment} = render (<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})
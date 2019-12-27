import React from 'react';
import Home from '../home'
import renderer from 'react-test-renderer'

test('Link renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
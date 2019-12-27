import React from 'react';
import Movie from '../movies'
import renderer from 'react-test-renderer'

test('Link renders correctly', () => {
    const tree = renderer
      .create(<Movie />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
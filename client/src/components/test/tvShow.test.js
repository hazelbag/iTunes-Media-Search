import React from 'react';
import TvShow from '../tvShow'
import renderer from 'react-test-renderer'

test('Link renders correctly', () => {
    const tree = renderer
      .create(<TvShow />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
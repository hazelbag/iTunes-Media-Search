import React from 'react';
import MusicVid from '../musicVideo'
import renderer from 'react-test-renderer'

test('Link renders correctly', () => {
    const tree = renderer
      .create(<MusicVid />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
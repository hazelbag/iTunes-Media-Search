import React from 'react';
import DropDown from '../dropDown'
import renderer from 'react-test-renderer'

test('Link renders correctly', () => {
    const tree = renderer
      .create(<DropDown />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
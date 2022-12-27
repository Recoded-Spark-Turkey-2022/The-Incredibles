import React from 'react';
import renderer from 'react-test-renderer';
import Story from '../Story';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Story />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});

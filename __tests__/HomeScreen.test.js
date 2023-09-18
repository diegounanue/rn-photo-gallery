import React from 'react';
import HomeScreen from "../Components/HomeScreen/HomeScreen";
import renderer from 'react-test-renderer';

describe('HomeScreen Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={{ navigate: jest.fn() }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import CameraScreen from "../Components/CameraScreen/CameraScreen";
import renderer from 'react-test-renderer';

describe('CameraScreen Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CameraScreen navigation={{ navigate: jest.fn() }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggles camera type correctly', () => {
    const component = renderer.create(<CameraScreen navigation={{ navigate: jest.fn() }} />);
    const instance = component.root;

    expect(instance.findByProps({ testID: 'camera-type' }).props.children).toBe('back');

    instance.findByProps({ title: 'Flip Image' }).props.onPress();

    expect(instance.findByProps({ testID: 'camera-type' }).props.children).toBe('front');
  });

});

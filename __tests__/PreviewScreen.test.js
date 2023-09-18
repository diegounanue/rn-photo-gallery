import React from 'react';
import renderer from 'react-test-renderer';
import PreviewScreen from '../Components/PreviewScreen/PreviewScreen';

describe('PreviewScreen Component', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        photoUri: 'https://example.com/photo.jpg', // Reemplaza con una URL válida
      },
    };
    const navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };

    const tree = renderer
      .create(<PreviewScreen route={route} navigation={navigation} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls handleAccept correctly', () => {
    const route = {
      params: {
        photoUri: 'https://example.com/photo.jpg', // Reemplaza con una URL válida
      },
    };
    const navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };

    const component = renderer.create(
      <PreviewScreen route={route} navigation={navigation} />
    );

    const instance = component.root;
    const handleAcceptButton = instance.findByProps({ title: 'Accept' });

    handleAcceptButton.props.onPress(); // Simula hacer clic en el botón "Accept"

    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });

  it('calls handleReject correctly', () => {
    const route = {
      params: {
        photoUri: 'https://example.com/photo.jpg', // Reemplaza con una URL válida
      },
    };
    const navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };

    const component = renderer.create(
      <PreviewScreen route={route} navigation={navigation} />
    );

    const instance = component.root;
    const handleRejectButton = instance.findByProps({ title: 'Reject' });

    handleRejectButton.props.onPress(); // Simula hacer clic en el botón "Reject"

    expect(navigation.goBack).toHaveBeenCalled();
  });
});

import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet ,Text, View, Button, Image, Dimensions} from 'react-native';
import { Camera } from 'expo-camera';
import { PhotoGalleryContext } from "../../Contexts/PhotoGalleryContext";

export default function PreviewScreen({ route, navigation }) {
  const [hasCameraPermission] = useState(null);
  const { addPhotoToGallery } = useContext(PhotoGalleryContext);


  const { photoUri } = route.params;

  const handleAccept = () => {
    addPhotoToGallery(photoUri)
    navigation.navigate('Home'); 
  };

  const handleReject = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <Image source={{ uri: photoUri }} style={styles.image} />
    <View style={styles.buttonContainer}>
      <Button title="Accept" onPress={handleAccept} />
      <Button title="Reject" onPress={handleReject} />
    </View>
  </View>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '90%',
      height: height * 0.8 , // El 90% de la altura de la pantalla
      resizeMode: 'cover',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 20,
    },
  });
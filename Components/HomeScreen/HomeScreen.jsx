import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { PhotoGalleryContext } from "../../Contexts/PhotoGalleryContext";

function HomeScreen({ navigation }) {
  const { photoGallery } = useContext(PhotoGalleryContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>List of Photos</Text>
      </View>
      <FlatList
        data={photoGallery}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.photoItem}>
            <Image source={{ uri: item }} style={styles.photo} />
          </View>
        )}
      />
      <View style={styles.centeredButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Color de fondo de la pantalla
  },
  header: {
    backgroundColor: "#7e75f8", // Color de fondo celeste
    padding: 10,
    alignItems: "center",
  },
  headerText: {
    color: '#fff',
    fontSize: 20
  },
  photoItem: {
    flex: 1,
    margin: 5,
  },
  photo: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  centeredButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    backgroundColor: "#dd57d3",
    width: 200,
    height: 50,
    justifyContent: "center", // Centra verticalmente el contenido del botón
    alignItems: "center",
  },
  buttonText: {
    color: '#fff'
  }
});

export default HomeScreen;

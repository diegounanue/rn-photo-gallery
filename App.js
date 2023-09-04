import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { PhotoGalleryProvider } from "./Contexts/PhotoGalleryContext";

export default function App() {
  return (
    <PhotoGalleryProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PhotoGalleryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, SafeAreaView, Text, Button, Pressable} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";
import { colors } from "./assets/Themes/colors";

const Stack = createStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        <Stack.Screen name="PreviewScreen" component={PreviewScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

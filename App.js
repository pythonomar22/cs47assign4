import { StyleSheet, SafeAreaView, Text, Button, Pressable} from "react-native";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import PreviewScreen from "./Screens/PreviewScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>

        <Stack.Screen name="DetailsScreen" component={DetailsScreen} 
          options={{
            title: "Song Details: ",
            headerStyle: {color: "white"},
            headerTitleStyle: {fontWeight: 'bold'}}}/>

        <Stack.Screen name="PreviewScreen" component={PreviewScreen} 
          options={{
            title: "Song Preview: ",
            headerStyle: {color: "white"},
            headerTitleStyle: {fontWeight: 'bold'}}}/>
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

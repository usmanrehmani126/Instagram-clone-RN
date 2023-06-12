
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewPost from "./screens/Home/AddNewPost";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import SignUpScreen from "./screens/SignUpScreen";
import Search from "./screens/Search";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="signUpSCreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddNewPost" component={AddNewPost} />
        <Stack.Screen name="loginScreen" component={Login} />
        <Stack.Screen name="signUpSCreen" component={SignUpScreen} />
        <Stack.Screen name="SearchScreen" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




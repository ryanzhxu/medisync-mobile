import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Landing from "./src/screens/auth/Landing";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import SignUpContinued from "./src/screens/auth/SignUpContinued";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    RobotoBlack: require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };

  if (!fontsLoaded && !fontError) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpContinued" component={SignUpContinued} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

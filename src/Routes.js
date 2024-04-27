import "react-native-gesture-handler";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet } from "react-native";
import colors from "./constants/colors";
import Landing from "./screens/auth/Landing";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";
import SignUpContinued from "./screens/auth/SignUpContinued";
import DrawerContent from "./components/DrawerContent";
// import { setUser } from "./store/user";
import Metrics from "./screens/app/Metrics";
import Documents from "./screens/app/Documents";
import Settings from "./screens/app/Settings";
import Profile from "./screens/app/Profile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  //   const user = useSelector((state) => state.user.data);
  const [user, setUser] = useState("User");
  const [initializing, setInitializing] = useState(true);

  //   if (initializing) {
  //     return null;
  //   }

  const Tabs = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarInactiveTintColor: colors.darkNavy,
        tabBarActiveTintColor: colors.black,
        tabBarLabelStyle: { fontFamily: "RobotoBold" },
        tabBarStyle: {
          paddingBottom: 14,
          height: 68,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderColor: colors.darkGrey,
        },
      }}
    >
      <Tab.Screen
        name="Metrics"
        component={Metrics}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("./assets/metrics_active.png")
                  : require("./assets/metrics_inactive.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Documents"
        component={Documents}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("./assets/documents_active.png")
                  : require("./assets/documents_inactive.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("./assets/settings_active.png")
                  : require("./assets/settings_inactive.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require("./assets/profile_active.png")
                  : require("./assets/profile_inactive.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name=" " component={Tabs} />
    </Drawer.Navigator>
  );

  //   return (
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="Landing" component={Landing} />
  //       <Stack.Screen name="SignUp" component={SignUp} />
  //       <Stack.Screen name="SignUpContinued" component={SignUpContinued} />
  //       <Stack.Screen name="SignIn" component={SignIn} />
  //     </Stack.Navigator>
  //   );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginTop: 6,
  },
});

export default React.memo(Routes);

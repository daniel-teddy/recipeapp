import React from "react";
import HomeScreen from "../src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialIcons, FontAwesome5, MaterialCommunityIcons
} from "@expo/vector-icons";
import SearchScreen from "../src/screens/Search";
import { KeyboardAvoidingView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "twrnc";
import MapsScreen from "../src/screens/MapsScreen";
import SettingScreen from "../src/screens/SettingScreen";
import ReservationScreen from "../src/screens/ReservationScreen";
import PlaceDetails from "../src/screens/PlaceDetails";
import LogIn from "../src/components/LogIn";
import SignUp from "../src/components/SignUp";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
      <Tab.Navigator initialRouteName={HomeScreen}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Reservations"
          component={ReservationScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="ticket-confirmation-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

const AuthenticatedRoutes = () => {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <Stack.Navigator
          initialRouteName="HomeTabs"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default AuthenticatedRoutes;
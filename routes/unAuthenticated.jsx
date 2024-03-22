import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  Text,
} from "react-native";
import tw from "twrnc";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapsScreen from "../src/screens/MapsScreen";
import SettingScreen from "../src/screens/SettingScreen";
import ReservationScreen from "../src/screens/ReservationScreen";
import HomeScreen from "../src/screens/Home";
import PlaceDetails from "../src/screens/PlaceDetails";
import SearchScreen from "../src/screens/Search";
import EventDetails from "../src/screens/EventDetails";
import BuyTicket from "../src/screens/BuyTickets";
import TicketScreen from "../src/screens/TicketScreen";
import SecurityScreen from "../src/screens/SecurityScreen";
import ViewTicket from "../src/screens/ViewTicket";

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

export const UnauthenticatedRoutes = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={tw`flex-1`}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          i
        >
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="Tickets" component={TicketScreen} />
            <Stack.Screen name="ViewTicket" component={ViewTicket} />
            <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
            <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="BuyTicket" component={BuyTicket} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </>
  );
};

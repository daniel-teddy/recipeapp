import React from "react";
import HomeScreen from "../src/screens/Home";
import RecipeScreen from "../src/screens/Recipe";
import { NavigationContainer } from "@react-navigation/native";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SearchScreen from "../src/screens/Search";
import { KeyboardAvoidingView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "twrnc";
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
        name="Recipe"
        component={RecipeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};
const Routes = () => {
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
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default Routes;

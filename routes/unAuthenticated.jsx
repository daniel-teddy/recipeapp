import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, View, Image, Text } from "react-native";
import tw from "twrnc";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";
import WelcomeScreen from "../src/screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export const UnauthenticatedRoutes=()=>{
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
    return(
      <>
      
        <NavigationContainer>
        <KeyboardAvoidingView
          style={tw`flex-1`}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </NavigationContainer>

      </>
        
    )
}
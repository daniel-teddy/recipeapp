import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SecurityScreen = () => {
  const navigation = useNavigation();
  const [remmber, setRemember] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notify, setNotify] = useState(true);
  const [suggest, setSuggest] = useState(true);
  const [faceId, setFaceId] = useState(false);

  const onToggleRemember = () => {
    setRemember(!remmber);
  };
  const onToggleDark = () => {
    setDarkMode(!darkMode);
  };
  const onToggleSuggest = () => {
    setSuggest(!suggest);
  };
  const onToggleNotify = () => {
    setNotify(!notify);
  };
  const onToggleFace = () => {
    setFaceId(!faceId);
  };

  const logAndSaveState = async () => {
    const currentState = {
      remmber,
      darkMode,
      notify,
      suggest,
      faceId,
    };

    console.log("Current State:", currentState);

    // Save to AsyncStorage
    const data = JSON.stringify(currentState);
    await AsyncStorage.setItem("settings", data);
    console.log("Data saved to AsyncStorage:", data);
  };

  // Update the state and log/save on change
  const updateState = (stateSetter, newValue) => {
    stateSetter(newValue);
    logAndSaveState();
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View
          style={tw`h-full w-full flex-col items-center justify-start px-2`}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={tw`flex-1 w-full`}
          >
            <View
              style={tw`h-full w-full flex-col items-center justify-center`}
            >
              <View
                style={tw`flex flex-col items-center justify-start w-full p-2 gap-2 `}
              >
                <View
                  style={tw`flex flex-row items-center justify-between w-full `}
                >
                  <View
                    style={tw`flex flex-row items-center gap-2 justify-between`}
                  >
                    <Pressable style={tw``} onPress={() => navigation.goBack()}>
                      <MaterialIcons
                        name="arrow-back"
                        size={34}
                        style={tw`text-blue-600 font-bold`}
                      />
                    </Pressable>
                    <Text style={tw`text-xl font-semibold`}>Security</Text>
                  </View>
                </View>
                <View
                  style={tw`flex flex-col items-center justify-center w-full mt-8  gap-4`}
                >
                  <Pressable
                    onPress={() => updateState(setFaceId, !faceId)}
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Text style={tw`font-bold text-lg`}>Face ID</Text>
                    </View>
                    <View>
                      <Switch
                        value={faceId} // Provide a state variable to handle the toggle state
                        onValueChange={() => updateState(setFaceId, !faceId)} // Provide a function to handle the toggle change
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => updateState(setRemember, !remmber)}
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Text style={tw`font-bold text-lg`}>Remember me</Text>
                    </View>
                    <View>
                      <Switch
                        value={remmber} // Provide a state variable to handle the toggle state
                        onValueChange={() => updateState(setRemember, !remmber)} // Provide a function to handle the toggle change
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => updateState(setDarkMode, !darkMode)}
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Text style={tw`font-bold text-lg`}>Dark Mode</Text>
                    </View>
                    <View>
                      <Switch
                        value={darkMode} // Provide a state variable to handle the toggle state
                        onValueChange={() =>
                          updateState(setDarkMode, !darkMode)
                        } // Provide a function to handle the toggle change
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => updateState(setSuggest, !suggest)}
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Text style={tw`font-bold text-lg`}>Suggestions</Text>
                    </View>
                    <View>
                      <Switch
                        value={suggest} // Provide a state variable to handle the toggle state
                        onValueChange={() => updateState(setSuggest, !suggest)} // Provide a function to handle the toggle change
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => updateState(setNotify, !notify)}
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Text style={tw`font-bold text-lg`}>Notifications</Text>
                    </View>
                    <View>
                      <Switch
                        value={notify} // Provide a state variable to handle the toggle state
                        onValueChange={() => updateState(setNotify, !notify)} // Provide a function to handle the toggle change
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="#f4f3f4"
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    // onPress={()=> navigation.goBack()}
                    // onPress={handleSave}
                    style={tw`w-full bg-blue-500 mt-8 p-3 flex-1 items-center justify-center rounded-full`}
                  >
                    <Text style={tw`text-lg text-white font-semibold`}>
                      Save
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SecurityScreen;

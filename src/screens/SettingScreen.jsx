import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "../../auth/AuthContext";

const SettingScreen = () => {
  const navigation = useNavigation();

  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
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
                    <Text style={tw`text-xl font-semibold`}>Settings</Text>
                  </View>
                </View>
                <View
                  style={tw`flex flex-col items-center justify-center w-full mt-8  gap-4`}
                >
                  <View
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Pressable
                        // onPress={() => navigation.navigate("Bookmark")}
                        style={tw`p-3 bg-blue-200 rounded-full`}
                      >
                        <MaterialIcons
                          name="lock-outline"
                          color="black"
                          size={26}
                        />
                      </Pressable>
                      <Text style={tw`font-bold text-lg`}>Security</Text>
                    </View>
                    <View>
                      <Pressable
                        style={tw``}
                        onPress={() => navigation.navigate("SecurityScreen")}
                      >
                        <MaterialIcons
                          name="arrow-forward"
                          size={34}
                          style={tw`text-blue-600 font-bold`}
                        />
                      </Pressable>
                    </View>
                  </View>
                  <View
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Pressable
                        // onPress={() => navigation.navigate("Bookmark")}
                        style={tw`p-3 bg-blue-200 rounded-full`}
                      >
                        <MaterialIcons
                          name="info-outline"
                          color="black"
                          size={26}
                        />
                      </Pressable>
                      <Text style={tw`font-bold text-lg`}>Help</Text>
                    </View>
                    <View>
                      <Pressable
                        style={tw``}
                        onPress={() => navigation.navigate("HelpScreen")}
                      >
                        <MaterialIcons
                          name="arrow-forward"
                          size={34}
                          style={tw`text-blue-600 font-bold`}
                        />
                      </Pressable>
                    </View>
                  </View>
                  <View
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-between gap-4`}
                    >
                      <Pressable
                        // onPress={() => navigation.navigate("Bookmark")}
                        style={tw`p-3 bg-blue-200 rounded-full`}
                      >
                        <Ionicons
                          name="md-people-outline"
                          color="black"
                          size={26}
                        />
                      </Pressable>
                      <Text style={tw`font-bold text-lg`}>Invite Friends</Text>
                    </View>
                    <View>
                      <Pressable
                        style={tw``}
                        onPress={() => navigation.goBack()}
                      >
                        <MaterialIcons
                          name="arrow-forward"
                          size={34}
                          style={tw`text-blue-600 font-bold`}
                        />
                      </Pressable>
                    </View>
                  </View>
                  <View
                    style={tw`flex flex-row items-center justify-between w-full border-t-2 border-gray-300 pt-4`}
                  >
                    <Pressable
                        onPress={handleLogout}
                      style={tw`flex flex-row items-center justify-start gap-4 w-full`}
                    >
                      <View
                        style={tw`p-3 bg-red-200 rounded-full`}
                      >
                        <MaterialIcons
                          name="exit-to-app"
                          color="black"
                          size={26}
                        />
                      </View>
                      <Text style={tw`font-bold text-lg`}>Logout</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SettingScreen;

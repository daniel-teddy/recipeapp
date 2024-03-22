import { View, Text, Pressable, SafeAreaView, Share } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import QRCodeGenerator from "../components/QRCode";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";

export default function ViewTicket() {
  const [userData, setUserData] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const viewShotRef = useRef(null);
  const handleEventPress = () => {
    navigation.navigate("HomeTabs");
  };
  console.log("item :", item);
  const handleDownloadTicket = async () => {
    try {
      if (!viewShotRef.current) {
        console.error("Ref is not available.");
        return;
      }

      const uri = await viewShotRef.current.capture();

      const result = await Sharing.shareAsync(uri, {
        mimeType: "image/png",
        dialogTitle: "Download Ticket",
        UTI: "public.png",
      });

      if (result === null) {
        console.log("Share cancelled");
      } else if (result.action === Sharing.sharedAction) {
        console.log("Share successful");
      } else if (result.action === Sharing.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing content:", error.message);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const formatTime = (timeString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };

    const formattedTime = new Date(
      `2022-01-01 ${timeString}`
    ).toLocaleTimeString(undefined, options);
    return formattedTime;
  };

  const formattedDate = formatDate(item.item.date);
  const formattedTime = formatTime(item.item.time);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDetailsString = await AsyncStorage.getItem("userDetails");
        if (userDetailsString) {
          const userDetails = JSON.parse(userDetailsString);
          setUserData(userDetails);
          // console.log("Retrieved User Details:", userDetails);
        } else {
          console.log("No user details found in AsyncStorage.");
        }
      } catch (error) {
        console.error("Error fetching user details: ", error);
      }
    };

    getUser();
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View
          style={tw`h-full w-full flex-col items-center justify-start px-2 pb-8`}
        >
          <View style={tw`h-full w-full flex-col items-center justify-center`}>
            <View
              style={tw`flex flex-col items-center justify-start w-full h-full p-2 gap-4 `}
            >
              <View
                style={tw`flex flex-row items-center justify-between w-full`}
              >
                <View style={tw`flex flex-row items-center justify-between`}>
                  <Pressable style={tw`mr-2`} onPress={handleEventPress}>
                    <MaterialIcons
                      name="arrow-back"
                      size={24}
                      style={tw`text-blue-500`}
                    />
                  </Pressable>
                  <Text style={tw`text-lg font-medium`}>Ticket</Text>
                </View>
                {/* <Pressable style={tw`p-1 bg-blue-200 rounded-md`}
                        onPress={() => navigation.navigate("TicketScreen")}
                        >
                      <MaterialIcons
                        name="format-list-bulleted"
                        color="black"
                        size={24}
                      />
                    </Pressable> */}
              </View>
              <View
                style={tw`w-full h-full flex flex-col items-center justify-center`}
              >
                <View
                  style={tw`w-full flex-1 items-center justify-center gap-4`}
                >
                  <ViewShot
                    ref={viewShotRef}
                    options={{ format: "png", quality: 1 }}
                    style={tw`h-[80%] w-[90%] flex-col items-center justify-start`}
                  >
                    <View
                      style={tw`self-center h-full w-full rounded-2xl bg-white`}
                    >
                      <View
                        style={tw`flex flex-col w-full justify-start items-center gap-2/4 p-4 h-2/5`}
                      >
                        <View>
                          <Text style={tw`text-lg font-bold`}>
                            {item.item.eventName}
                          </Text>
                        </View>
                        <View
                          style={tw`flex flex-col items-center justify-center p-4 w-full`}
                        >
                          <QRCodeGenerator item={item} userData={userData} />
                        </View>
                      </View>
                      <View
                        style={tw`justify-center items-center flex-row h-1/5 w-full`}
                      >
                        <View style={tw`h-10 w-10 rounded-full bg-gray-100`} />
                        <Text style={tw`text-gray-400 mx-2`}>
                          - - - - - - - - - - - - - - - - - - - - - - - - - -
                        </Text>
                        <View style={tw`h-10 w-10 rounded-full bg-gray-100`} />
                      </View>
                      <View
                        style={tw`flex flex-col w-full justify-start items-start p-4 h-2/5 gap-6`}
                      >
                        <View>
                          <Text
                            style={tw`text-left text-gray-400 text-[1rem] font-semibold`}
                          >
                            Name
                          </Text>
                          <Text style={tw`text-lg font-bold`}>
                            {userData.firstName} {userData.lastName}
                          </Text>
                        </View>
                        <View
                          style={tw`flex flex-row items-center justify-between w-full`}
                        >
                          <View>
                            <Text
                              style={tw`text-left text-gray-400 text-[1rem] font-semibold`}
                            >
                              Date
                            </Text>
                            <Text style={tw`text-[4] font-semibold`}>
                              {formattedDate}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={tw`text-left text-gray-400 text-[1rem] font-semibold`}
                            >
                              Time
                            </Text>
                            <Text style={tw`text-[4] font-semibold`}>
                              {formattedTime}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={tw`text-left text-gray-400 text-[1rem] font-semibold`}
                          >
                            Location
                          </Text>
                          <Text style={tw`text-[4] font-bold`}>
                            {item.item.address || "Address"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ViewShot>
                  <View
                    style={tw`w-[90%] flex flex-row items-center justify-between`}
                  >
                    <Pressable
                      onPress={handleDownloadTicket}
                      style={tw`w-full bg-blue-500 p-3 flex-1 items-center justify-center rounded-full`}
                    >
                      <Text style={tw`text-lg text-white font-semibold`}>
                        Download Ticket
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

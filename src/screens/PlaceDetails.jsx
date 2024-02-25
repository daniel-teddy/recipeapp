import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  Pressable,
  SafeAreaView,
  Share,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tw from "twrnc";
import MapsComponent from "../components/MapsComponent";

export default function PlaceDetails() {
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  const EventTextShared = "item.eventName" + " " + "item.description";
  const eventShared = item.imageUrl;
  const ShareContent = async () => {
    try {
      const result = await Share.share({
        message: EventTextShared,
        url: eventShared,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // console.log(`Shared via ${result.activityType}`);
        } else {
          // console.log('Share dismissed');
        }
      } else if (result.action === Share.dismissedAction) {
        // console.log('Share dismissed');
      }
    } catch (error) {
      console.error("Error sharing content:", error.message);
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={tw`h-full w-full flex-col items-center justify-start`}>
        <View style={tw`flex-1 w-full h-full`}>
          <View
            style={tw`h-full w-full flex-col items-center justify-start z-70 absolute top-[-0.1rem]`}
          >
            <View
              style={tw`flex flex-col items-center justify-start w-full h-full gap-2 `}
            >
              <Image
                style={[tw`w-full h-[15rem] mb-2`, { resizeMode: "cover" }]}
                source={{
                  uri: item.imageUrl,
                }}
              />
              <SafeAreaView style={tw`flex-1 w-full h-full flex flex-col`}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={tw`flex-1 w-full h-full`}
                >
                  <View
                    style={tw`flex flex-col items-start justify-center w-full h-8 px-2 `}
                  >
                    <Text style={tw`text-xl font-semibold`}>{item.type}</Text>
                  </View>
                  <View
                    style={tw`flex flex-row items-start justify-start w-full h-16 gap-4 p-2 `}
                  >
                    <Pressable style={tw`p-3 bg-blue-200 rounded-full`}>
                      <AntDesign name="calendar" color="black" size={26} />
                    </Pressable>
                    <View style={tw`flex flex-col items-start justify-start`}>
                      <Text style={tw`text-xl font-medium`}>2024-07-03</Text>
                      <Text style={tw`text-lg font-medium`}>Time: 1:00 PM</Text>
                    </View>
                  </View>
                  <View
                    style={tw`flex flex-row items-start justify-start w-full h-16 gap-4 p-2 `}
                  >
                    <Pressable style={tw`p-3 bg-blue-200 rounded-full`}>
                      <MaterialIcons
                        name="location-on"
                        color="black"
                        size={26}
                      />
                    </Pressable>
                    <View style={tw`flex flex-col items-start justify-start`}>
                      <Text style={tw`font-medium`}>Address</Text>
                      <Text style={tw`text-lg font-medium`}>{item.type}</Text>
                    </View>
                  </View>
                  <View
                    style={tw`flex flex-row items-center justify-between w-full h-15 gap-4 p-2 `}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-start gap-4`}
                    >
                      <Pressable
                        onPress={ShareContent}
                        style={tw`p-3 bg-blue-200 rounded-full`}
                      >
                        <MaterialIcons
                          name="share"
                          size={20}
                          style={tw`text-black font-bold`}
                        />
                      </Pressable>
                      <Pressable style={tw`p-3 bg-blue-200 rounded-full`}>
                        <MaterialIcons
                          name="bookmark-border"
                          size={20}
                          style={tw`text-black font-bold`}
                        />
                      </Pressable>
                    </View>
                    <View
                      style={tw`flex flex-col items-start justify-start gap-2`}
                    >
                      <Pressable
                        style={tw`flex flex-col bg-blue-500 items-center justify-center border-2 border-blue-500 rounded-full w-full  h-10 p-2 px-4`}
                      >
                        <Text style={tw`text-white font-semibold`}>Visit</Text>
                      </Pressable>
                    </View>
                  </View>
                  
                  <MapsComponent item={item} />
                  <View
                    style={tw`flex flex-col items-start justify-start w-full h-48 p-2 px-4 mb-4`}
                  >
                    <Text style={tw`text-lg font-medium`}>About Place</Text>
                    <Text>
                      {item.description ||
                        "No description available, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas perferendis nostrum rem, eaque reiciendis! Iusto debitis quasi nam, fugiat et cupiditate vitae quaerat, quae nisi impedit odit eligendi ipsa laudantium sit quos repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas perferendis nostrum rem, eaque reiciendis! Iusto debitis quasi nam, fugiat et cupiditate vitae quaerat, quae nisi impedit odit eligendi ipsa laudantium sit quos repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas perferendis nostrum rem, eaque reiciendis! Iusto debitis quasi nam, fugiat et cupiditate vitae quaerat, quae nisi impedit odit eligendi ipsa laudantium sit quos repellat."}
                    </Text>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>
          <View
            style={tw`flex flex-col items-center justify-center z-70 absolute top-10 left-1 p-2 `}
          >
            <Pressable style={tw``} onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={34}
                style={tw`text-white font-bold`}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </GestureHandlerRootView>
  );
}

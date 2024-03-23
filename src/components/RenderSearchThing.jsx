import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

export default function RenderSearchThing({ item, bookMarked, onPress }) {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={[
        tw`w-full h-40 my-2 rounded-2xl overflow-hidden border border-blue-400`,
        bookMarked && tw`w-full m-0 my-2`,
      ]}
    >
      <View style={tw`flex flex-row items-center justify-between w-full`}>
        <ImageBackground
          source={{ uri: item.image }}
          style={[tw`rounded-l-lg w-38 overflow-hidden`]}
        >
          <View style={tw`flex flex-col items-center justify-center`} />
          <View
            style={tw`flex flex-col items-end justify-start h-full p-2 rounded-lg`}
          >
            <View
              style={tw`bg-blue-500 flex flex-col items-center justify-center p-2 rounded-full`}
            >
              <Text style={tw`text-white font-semibold`}>
                {formatDate(item.date_range.start_date)}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={tw`w-52 h-full flex-col items-start justify-evenly px-2 gap-1 my-1`}
        >
          <View style={tw`flex flex-row items-center justify-between w-full`}>
            <Text style={tw`text-xl font-bold`}>
              {item.eventName || "Name"}
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-start w-full`}>
            <MaterialIcons
              name="location-on"
              style={tw`text-blue-500`}
              size={24}
            />
            <Text style={tw``}>
              {item.location.link && item.location.link.length > 17
                ? item.location.link.substring(0, 19) + " ..."
                : item.location.link || "Address"}
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-around w-full`}>
            <View
              style={tw`flex flex-col items-center justify-between border-2 border-blue-500 rounded-full py-1 px-3`}
            >
              <Text style={tw`text-blue-500`}>
                {item.category || "Category"}
              </Text>
            </View>
            <Pressable
            //   onPress={() => navigation.navigate("Details", { item })}
            >
              <MaterialIcons
                name={bookMarked ? "bookmark" : "bookmark-border"}
                style={tw`text-blue-500`}
                size={24}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

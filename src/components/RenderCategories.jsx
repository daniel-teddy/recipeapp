import { Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import tw from "twrnc";
export default function RenderCategories({ item, onPress }) {
  const handlePress = () => {
    onPress(item);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={[tw`w-58 flex flex-col items-start justify-center h-44 m-1 my-2`]}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={[
          tw` w-full h-40 overflow-hidden flex flex-col items-start justify-end rounded-lg`,
        ]}
      ></ImageBackground>
      <Text style={[tw`text-slate-600 font-semibold mt-2 pl-2`]}>
        {item.eventName && item.eventName.length > 24
          ? item.eventName.substring(0, 26) + " ..."
          : item.eventName || "eventName"}
      </Text>
    </Pressable>
  );
}

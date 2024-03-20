import { Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import tw from "twrnc";
const RenderCategories = ({ item }) => (
  <Pressable
    style={[tw`w-58 flex flex-col items-start justify-center h-44 m-1 my-2`]}
  >
    <ImageBackground
      source={{ uri: item.image }}
      style={[
        tw` w-full h-40 overflow-hidden flex flex-col items-start justify-end rounded-lg`,
      ]}
    ></ImageBackground>
    <Text style={[tw`text-slate-600 font-semibold mt-2 pl-2`]}>
      {item.eventName}
    </Text>
  </Pressable>
);
export default RenderCategories;

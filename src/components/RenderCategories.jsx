import { Text, Pressable, ImageBackground } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderCategories = ({ item }) => (
    <Pressable
      style={[
        tw`w-[48%] flex flex-col items-start justify-center h-40 m-1 my-2`,
      ]}
    >
        <ImageBackground
        source={{ uri: item.imageUrl }}
        style={[tw` w-full h-35 overflow-hidden flex flex-col items-start justify-end rounded-lg`]}
        >
        </ImageBackground>
        <Text
        style={[
          tw`text-slate-600 font-bold mt-1`,
        ]}
      >
        {item.type}
      </Text>
    </Pressable>
  );
  export default RenderCategories;
import { Text, Pressable, ImageBackground } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderStatus = ({ item }) => (
    <Pressable
      style={[
        tw`w-18 flex flex-col items-center justify-center h-20 m-1 my-2`,
      ]}
    >
        <ImageBackground
        source={{ uri: item.imageUrl }}
        style={[tw` w-full h-18 overflow-hidden flex flex-col items-start justify-end rounded-full`]}
        >
        </ImageBackground>
        <Text
        style={[
          tw`text-slate-600 mt-1`,
        ]}
      >
        {item.type}
      </Text>
    </Pressable>
  );
  export default RenderStatus;
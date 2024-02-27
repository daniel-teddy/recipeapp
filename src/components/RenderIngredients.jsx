import { Text, Pressable, ImageBackground } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderIngredients = ({ item }) => (
    <Pressable
      style={[
        tw`w-35 flex flex-col items-center justify-center h-35 m-1 mb-2`,
      ]}
    >
        <ImageBackground
        source={{ uri: item.imageUrl }}
        style={[tw` w-full h-30 overflow-hidden flex flex-col items-start justify-end rounded-lg`]}
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
  export default RenderIngredients;

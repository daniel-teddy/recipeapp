import { Text, Pressable } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderIngredientsScroll = ({ item }) => (
    <Pressable
      style={[
        tw`m-1 flex flex-col items-center justify-center border-2 border-red-500 rounded-full h-10 px-6`,
      ]}
    >
      <Text
        style={[
          tw`text-red-500 font-semibold`,
        ]}
      >
        {item.type}
      </Text>
    </Pressable>
  );
  export default RenderIngredientsScroll;
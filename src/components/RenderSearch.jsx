import { Text, Pressable } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderSearch = ({ item, pressedCategory, onPress }) => (
    <Pressable
    //   onPress={() => onPress(item.id)}
      style={[
        tw`m-1 flex flex-col items-center justify-center border-2 border-blue-500 rounded-full py-2 h-10 px-6`,
        pressedCategory === item.id && tw`bg-blue-500`,
      ]}
    >
      <Text
        style={[
          tw`text-blue-500 font-semibold`,
          pressedCategory === item.id && tw`text-white`,
        ]}
      >
        {item.title}
      </Text>
    </Pressable>
  );
  export default RenderSearch;
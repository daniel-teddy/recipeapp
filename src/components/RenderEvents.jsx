import { Text, Pressable, ImageBackground } from 'react-native'
import React from "react";
import tw from "twrnc";
export default function RenderEvents ({ item, onPress }) {
    const handlePress = () => {
        onPress(item);
      };

    return(
        <Pressable
        onPress={handlePress}
      style={[
        tw`w-68 flex flex-col items-start justify-center p-1 m-1 my-2 bg-gray-100 rounded-lg`,
      ]}
    >
        <ImageBackground
        source={{ uri: item.imageUrl }}
        style={[tw` w-full h-46 overflow-hidden flex flex-col items-start justify-end rounded-lg`]}
        >
        </ImageBackground>
        <Text
        style={[
          tw`text-slate-600 font-semibold mt-2 pl-2`,
        ]}
      >
        {item.eventName}
      </Text>
    </Pressable>
    )
}
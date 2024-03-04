import { Text, View, ImageBackground } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderStatus = ({ item }) => (
    <View
      style={[
        tw`w-20 flex flex-col items-center justify-center h-30 mx-2`,
      ]}
    >
        <ImageBackground
        source={{ uri: item.imageUrl }}
        style={[tw` w-full h-20 overflow-hidden flex flex-col items-center justify-center rounded-full`]}
        >
        </ImageBackground>
        <Text
        style={[
          tw`text-slate-600 mt-2`,
        ]}
      >
        {item.eventName}
      </Text>
    </View>
  );
  export default RenderStatus;
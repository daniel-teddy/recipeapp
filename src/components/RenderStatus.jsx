import { Text, View, ImageBackground } from 'react-native'
import React from "react";
import tw from "twrnc";
const  RenderStatus = ({ item }) => (
    <View
      style={[
        tw`w-20 flex flex-col items-center justify-center h-22 m-3`,
      ]}
    >
        <ImageBackground
        source={{ uri: item.imageUrl }}
        style={[tw` w-full h-20 overflow-hidden flex flex-col items-start justify-end rounded-full`]}
        >
        </ImageBackground>
        <Text
        style={[
          tw`text-slate-600 mt-2`,
        ]}
      >
        {item.type}
      </Text>
    </View>
  );
  export default RenderStatus;
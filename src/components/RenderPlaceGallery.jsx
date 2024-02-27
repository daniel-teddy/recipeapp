import React from "react";
import { Text, View, ImageBackground } from 'react-native';
import tw from "twrnc";

const RenderPlaceGallery = ({ item }) => (
  <View
    style={[
      tw`w-20 flex flex-col items-center justify-center m-1 mb-2`,
    ]}
  >
    <ImageBackground
      source={{ uri: item.imageUrl }}
      style={[tw` w-full h-20 overflow-hidden flex flex-col items-start justify-end rounded-full`]}
    >
    </ImageBackground>
  </View>
);

export default RenderPlaceGallery;

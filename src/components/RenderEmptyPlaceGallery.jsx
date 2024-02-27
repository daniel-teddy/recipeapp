import React from "react";
import { Text, Pressable } from 'react-native';
import tw from "twrnc";

const RenderEmptyPlaceGallery = ({remaining}) => (
  <Pressable
    style={[
      tw`w-20 h-20 rounded-full left-[-22] bg-gray-200 flex flex-col items-center justify-center m-1 mb-2`,
    ]}
  >
    <Text>+ {remaining}</Text>
  </Pressable>
);

export default RenderEmptyPlaceGallery;

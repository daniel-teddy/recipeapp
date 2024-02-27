import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
export default function PopUpModal() {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={tw`flex-1 h-full w-full justify-center items-center`}>
          <View style={tw`p-4 rounded flex-1  shadow-lg z-50 w-full flex flex-col items-center justify-center`}>
            <Text>selectedGalleryItem type</Text>
            <Pressable onPress={closeModal}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </View>
        </View>
  );
}

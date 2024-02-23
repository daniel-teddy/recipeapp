import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";

const RecipeScreen = () => {
  return (
    <View
      style={tw`flex-1 w-full p-2 flex flex-col items-start justify-start gap-4 bg-white`}
    >
      <View
        style={tw`flex flex-col items-start justify-center w-full rounded-lg `}
      >
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={[tw`rounded-lg w-full h-50 overflow-hidden`]}
        >
          <View style={tw`flex flex-col items-center justify-center`} />
          <View
            style={tw`flex flex-col items-start justify-end h-full gap-2 p-4 rounded-lg`}
          >
            <Text style={tw`text-white text-lg font-bold`}>
              Today's special
            </Text>
            <View
              style={tw`bg-blue-500 flex flex-col items-center justify-center p-3 rounded-full`}
            >
              <Pressable>
                <Text style={tw`text-white font-semibold`}>Try now !</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default RecipeScreen;

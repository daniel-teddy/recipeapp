import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";

const SettingScreen = () => {
  return (
    <View
      style={tw`flex-1 w-full flex flex-col items-center justify-center bg-white`}
    >
      <Text>SettingScreen</Text>
    </View>
  )
}

export default SettingScreen
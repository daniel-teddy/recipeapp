import { View, SafeAreaView } from "react-native";
import React, {  useState } from "react";
import tw from "twrnc";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";


const WelcomeScreen = () => {
  
  const [isNew, setIsNew] = useState(true);
  const toggleIsNew = () => {
    setIsNew(!isNew);
  };

  return (
    <SafeAreaView>
      <View
        style={tw`h-full w-full flex flex-col items-center justify-center px-2`}
      >
        <View style={tw`flex-1`}>{!isNew ? <LogIn toggleIsNew={toggleIsNew} /> : <SignUp toggleIsNew={toggleIsNew} />}</View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

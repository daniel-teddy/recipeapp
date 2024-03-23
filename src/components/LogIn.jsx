import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { useAuth } from "../../auth/AuthContext";

const LogIn = ({ toggleIsNew }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 30000);

    return () => clearTimeout(timeout);
  }, []);

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = async () => {
    await login(email, password);
  };

  const toggleSecureEntry = () => {
    setIsSecureTextEntry((prev) => !prev);
  };
  return (
    <KeyboardAvoidingView style={tw`flex-1`}>
      <View
        style={tw`flex flex-col h-full w-full gap-2 items-center justify-center py-10 px-6 rounded-t-lg`}
      >
        <View
          style={[
            tw`w-full h-full flex flex-col items-center justify-center gap-4`,
          ]}
        >
          <Text style={tw`font-bold text-xl pt-4`}>Sign In</Text>

          <View
            style={[tw`flex flex-col items-start justify-center w-full gap-2`]}
          >
            <Text style={tw`font-semibold text-lg`}>Email</Text>
            <TextInput
              id="email"
              name="email"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={tw`border-b-2 border-[#00000080] h-10 w-full font-semibold text-lg flex flex-col items-center justify-center pb-2`}
              placeholderTextColor="#003f5c"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View
            style={tw`flex flex-col items-start justify-center w-full gap-2`}
          >
            <Text style={tw`font-semibold text-lg`}>Password</Text>
            <TextInput
              id="password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={isSecureTextEntry}
              style={tw`border-b-2 border-[#00000080] h-10 w-full font-semibold text-lg flex flex-col items-center justify-center pb-1`}
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={tw`flex flex-col items-end justify-center w-full gap-2`}>
            <Pressable onPress={toggleSecureEntry}>
              <Text style={tw`font-semibold mb-6`}>
                {isSecureTextEntry ? "Show Password" : "Hide Password"}
              </Text>
            </Pressable>
          </View>

          <View
            style={tw`flex flex-col items-center justify-center w-full gap-2`}
          >
            <Pressable
              onPress={handleLogin}
              // onPress={handleSignUp}
              style={tw`py-3 w-[327px] flex items-center justify-center rounded-lg bg-blue-300`}
            >
              <Text style={tw`text-black text-xl font-semibold`}>Sign In</Text>
            </Pressable>
            <View
              style={tw`w-full flex flex-row items-center justify-between `}
            >
              <View style={tw`flex flex-col items-center justify-center`}>
                <Pressable onPress={toggleIsNew}>
                  <Text style={tw`font-semibold text-lg underline`}>
                    Create account
                  </Text>
                </Pressable>
              </View>
              <View style={tw` flex flex-row items-center justify-center`}>
                <Text style={tw`font-normal text-lg`}>forgot </Text>
                <Pressable>
                  <Text style={tw`font-semibold text-lg underline`}>
                    password ?
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

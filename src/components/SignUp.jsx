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
import { useNavigation } from "@react-navigation/native";

const SignUp = ({ toggleIsNew }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const { register } = useAuth();
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async () => {
    try {
      if (!email.includes("@")) {
        console.log("Error", "Invalid email address");
        return;
      }

      await register(firstName, lastName, email, password, 2);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSecureEntry = () => {
    setIsSecureTextEntry((prev) => !prev);
  };
  return (
    <KeyboardAvoidingView>
      <View
        style={tw`flex flex-col h-full w-full gap-1 items-center justify-between px-6 rounded-t-lg`}
      >
        {loading ? (
          <View
            style={[
              tw`w-full h-full flex flex-col items-center justify-center gap-4`,
            ]}
          >
            <View
              style={tw`flex flex-col items-center justify-center rounded-full p-3`}
            >
              <Image
                style={[
                  tw`flex flex-col items-center justify-center h-60 w-60  rounded-full`,
                  { resizeMode: "cover" },
                ]}
                source={{
                  uri: "https://expatmedicare.com/wp-content/uploads/2020/08/expatmedicare-travel-insurance-for-expats.png",
                }}
              />
            </View>
            <Text style={tw`font-semibold text-lg`}>Discover</Text>
          </View>
        ) : (
          <View
            style={[
              tw`w-full h-full flex flex-col items-start justify-center gap-2 `,
            ]}
          >
            <Text style={tw`font-bold text-xl mb-4`}>Get a free account</Text>
            <View
              style={tw`flex flex-col items-start justify-center w-full gap-1`}
            >
              <Text style={tw`font-semibold text-lg`}>First Name</Text>
              <TextInput
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
                style={tw`border-b-2 border-[#00000080] h-10 w-full font-semibold text-lg flex flex-col items-center justify-center pb-1`}
                placeholderTextColor="#003f5c"
              />
            </View>
            <View
              style={tw`flex flex-col items-start justify-center w-full gap-1`}
            >
              <Text style={tw`font-semibold text-lg`}>Last Name</Text>
              <TextInput
                value={lastName}
                onChangeText={(value) => setLastName(value)}
                style={tw`border-b-2 border-[#00000080] h-10 w-full font-semibold text-lg flex flex-col items-center justify-center pb-1`}
                placeholderTextColor="#003f5c"
              />
            </View>
            <View
              style={tw`flex flex-col items-start justify-center w-full gap-1`}
            >
              <Text style={tw`font-semibold text-lg`}>Email</Text>
              <TextInput
                style={tw`border-b-2 border-[#00000080] h-10 w-full font-semibold text-lg flex flex-col items-center justify-center pb-1`}
                placeholderTextColor="#003f5c"
                autoCapitalize="none"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View
              style={tw`flex flex-col items-start justify-center w-full gap-1`}
            >
              <Text style={tw`font-semibold text-lg`}>Password</Text>
              <TextInput
                secureTextEntry={isSecureTextEntry}
                style={tw`border-b-2 border-[#00000080] h-10 w-full font-semibold text-lg flex flex-col items-center justify-center pb-1`}
                placeholderTextColor="#003f5c"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <View
              style={tw`flex flex-col items-end justify-center w-full gap-2`}
            >
              <Pressable onPress={toggleSecureEntry}>
                <Text style={tw`font-semibold mb-6`}>
                  {isSecureTextEntry ? "Show Password" : "Hide Password"}
                </Text>
              </Pressable>
            </View>
            <View
              style={tw`flex flex-col items-center justify-center w-full gap-8`}
            >
              <Pressable
                onPress={handleRegistration}
                style={tw`py-3 w-[327px] flex items-center justify-center rounded-lg bg-blue-300`}
              >
                <Text style={tw`text-black text-lg font-semibold`}>
                  Sign Up
                </Text>
              </Pressable>
              <View
                style={tw`w-full flex flex-row items-center justify-center gap-2`}
              >
                <Text style={tw`font-normal text-lg`}>Already a member ?</Text>
                <Pressable onPress={toggleIsNew}>
                  <Text style={tw`font-semibold text-lg`}>Sign In</Text>
                </Pressable>
              </View>
              <View
                style={tw`w-full flex flex-row items-center justify-center gap-2`}
              >
                <Text style={tw`font-normal text-lg`}>OR</Text>
              </View>
              <View
                style={tw`w-full flex flex-row items-center justify-center gap-2`}
              >
                <Pressable onPress={() => navigation.navigate("HomeTabs")}>
                  <Text style={tw`font-semibold text-lg`}>
                    Register later ?
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

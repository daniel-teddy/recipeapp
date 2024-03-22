import { View, Text, Pressable, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function BuyTicket() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  const [noTickets, setNoTickets] = useState(1);
  const [optionSelect, setOptionSelect] = useState("VIP");
  const [costTicket, setCostTicket] = useState(24.4);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    calculateTicketPrice();
  }, [optionSelect, noTickets]);

  const handleEco = () => {
    setOptionSelect("Economy");
  };

  const handleVip = () => {
    setOptionSelect("VIP");
  };

  const handleDown = () => {
    if (noTickets > 1) {
      setNoTickets(noTickets - 1);
    }
  };

  const handleUp = () => {
    if (noTickets < 10) {
      setNoTickets(noTickets + 1);
    }
  };

  const calculateTicketPrice = () => {
    const ticketPrice =
      optionSelect === "VIP"
        ? costTicket * 1.5 * noTickets
        : costTicket * noTickets;
    setCalculatedPrice(ticketPrice);
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View
          style={tw`h-full w-full flex-col items-center justify-start px-2`}
        >
          <View style={tw`h-full w-full flex-col items-center justify-center`}>
            <View
              style={tw`flex flex-col items-center justify-start w-full h-full p-2 gap-4 `}
            >
              <View
                style={tw`flex flex-row items-center justify-between w-full`}
              >
                <View style={tw`flex flex-row items-center justify-between`}>
                  <Pressable
                    style={tw`mr-2`}
                    onPress={() => navigation.navigate("HomeTabs")}
                  >
                    <MaterialIcons
                      name="arrow-back"
                      size={24}
                      style={tw`text-blue-500`}
                    />
                  </Pressable>
                  <Text style={tw`text-lg font-bold`}>Buy Ticket</Text>
                </View>
              </View>
              <View
                style={tw`w-full h-[90%] flex flex-col items-start justify-between gap-8`}
              >
                <View
                  style={tw`w-full flex flex-col items-start justify-start gap-8`}
                >
                  <Text style={tw`text-lg font-semibold`}>Ticket Type</Text>
                  <View
                    style={tw`w-full flex flex-row items-center justify-between gap-2`}
                  >
                    <Pressable
                      onPress={handleVip}
                      style={[
                        tw`w-2/4 border-2 border-blue-500 p-2 flex-1 items-center justify-center rounded-full`,
                        optionSelect === "VIP" && tw`bg-blue-500`,
                      ]}
                    >
                      <Text
                        style={[
                          optionSelect != "VIP" &&
                            tw`text-lg text-blue-500 font-semibold`,
                          optionSelect === "VIP" &&
                            tw`text-white text-lg font-semibold`,
                        ]}
                      >
                        VIP
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={handleEco}
                      style={[
                        tw`w-2/4 border-2 border-blue-500 p-2 flex-1 items-center justify-center rounded-full`,
                        optionSelect === "Economy" && tw`bg-blue-500`,
                      ]}
                    >
                      <Text
                        style={[
                          optionSelect != "Economy" &&
                            tw`text-lg text-blue-500 font-semibold`,
                          optionSelect === "Economy" &&
                            tw`text-white text-lg font-semibold`,
                        ]}
                      >
                        Economy
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <View
                  style={tw`w-full flex flex-col items-start justify-start gap-8`}
                >
                  <Text style={tw`text-lg font-semibold`}>Tickets</Text>
                  <View
                    style={tw`w-full flex flex-row items-center justify-between gap-2 border border-gray-300 rounded-xl p-4`}
                  >
                    <Pressable
                      onPress={handleDown}
                      style={tw`bg-blue-500 p-4 w-15 flex flex-col items-center justify-center rounded-xl`}
                    >
                      <Text style={tw`text-2xl text-white font-bold`}>-</Text>
                    </Pressable>
                    <View
                      style={tw`w-1/3  p-2 flex-1 items-center justify-center`}
                    >
                      <Text style={tw`text-xl font-bold`}>{noTickets}</Text>
                    </View>
                    <Pressable
                      onPress={handleUp}
                      style={tw`bg-blue-500 p-4 w-15 flex flex-col items-center justify-center rounded-xl`}
                    >
                      <Text style={tw`text-2xl text-white font-bold`}>+</Text>
                    </Pressable>
                  </View>
                </View>
                <View
                  style={tw`w-full flex flex-col items-center justify-center gap-6`}
                >
                  <Text
                    style={tw`text-lg font-semibold`}
                  >{`Total Price: $ ${calculatedPrice.toFixed(2)}`}</Text>
                  <View
                    style={tw`w-full flex flex-row items-center justify-between`}
                  >
                    <Pressable
                      onPress={() =>
                        navigation.navigate("Payment", {
                          item,
                          calculatedPrice,
                          optionSelect,
                        })
                      }
                      style={tw`w-full bg-blue-500 p-3 flex-1 items-center justify-center rounded-full`}
                    >
                      <Text style={tw`text-lg text-white font-semibold`}>
                        Continue
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { Feather, FontAwesome } from "@expo/vector-icons";
import RenderTrending from "../components/RenderTrending";
export default function TicketScreen() {
  const navigation = useNavigation();
  const [evenTickets, setEvenTickets] = useState([]);

  const getTransactionsFromStorage = async () => {
    try {
      const transactionsString = await AsyncStorage.getItem("transactions");

      if (transactionsString) {
        const transactions = JSON.parse(transactionsString);
        setEvenTickets(transactions);
      } else {
        console.log("No transactions found in AsyncStorage.");
      }
      // console.log("Transactions Saved:", evenTickets);
    } catch (error) {
      console.error("An error occurred while getting transactions:", error);
    }
  };

  useEffect(() => {
    getTransactionsFromStorage();
  }, [setEvenTickets]);

  //   useEffect(() => {
  //     console.log("Transactions Saved:", evenTickets);
  //   }, [evenTickets]);

  const [bookMarked, setBookMarked] = useState(true);
  const handleEventPress = (item) => {
    navigation.navigate("ViewTicket", { item });
    // navigation.navigate('EventDetails', { item });
  };

  const handlePress = async () => {
    try {
      await AsyncStorage.removeItem("transactions");
      console.log(
        "AsyncStorage Cleared",
        "All transactions data has been removed from AsyncStorage."
      );
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
      console.log("Error", "An error occurred while clearing AsyncStorage.");
    }
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <View
            style={tw`h-full w-full flex-col items-center justify-start px-2`}
          >
            <View
              style={tw`h-full w-full flex-col items-center justify-center`}
            >
              <View
                style={tw`flex flex-col items-center justify-start w-full h-full p-2 gap-4 `}
              >
                <View
                  style={tw`flex flex-row items-center justify-between w-full`}
                >
                  <View style={tw`flex flex-row items-center justify-between`}>
                    <Pressable
                      style={tw`mr-2`}
                      onPress={() => navigation.navigate("Home")}
                    >
                      <MaterialIcons
                        name="arrow-back"
                        size={24}
                        style={tw`text-blue-500`}
                      />
                    </Pressable>
                    <Text style={tw`text-lg font-medium`}>Your Tickets</Text>
                  </View>
                  <Pressable
                    style={tw`p-2 bg-red-300 rounded-md`}
                    onPress={handlePress}
                  >
                    <Feather name="trash-2" size={24} style={tw``} />
                  </Pressable>
                </View>
                <View
                  style={tw`w-full h-full flex flex-col items-start justify-start`}
                >
                  <View style={tw`w-full h-full pb-8`}>
                    {evenTickets ? (
                      <FlatList
                        data={evenTickets}
                        keyExtractor={(item, index) => index.toString()}
                        vertical
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                          <RenderTrending
                            style={tw`w-full h-full px-1`}
                            item={item}
                            bookMarked={bookMarked}
                            onPress={handleEventPress}
                          />
                        )}
                      />
                    ) : (
                      <View
                        style={tw`w-full h-full flex flex-col items-center justify-center gap-8`}
                      >
                        <View style={tw`p-8 bg-blue-200 rounded-full`}>
                          <FontAwesome name="calendar-check-o" size={34} />
                        </View>
                        <Text style={tw`text-lg font-medium`}>No Events</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

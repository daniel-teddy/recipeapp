import { View, Text, Modal, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
// import { useAuth } from "../../../auth/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SuccessFailModal = ({
  item,
  calculatedPrice,
  optionSelect,
  cardNumber,
  cardHolder,
  onClose,
}) => {
  //   const { createBooking } = useAuth();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const handleNavigation = () => {
    navigation.navigate("Tickets");
    setModalVisible(false);
  };

  useEffect(() => {
    const handleSaveTransactions = async () => {
      try {
        const userDetails = await AsyncStorage.getItem("userDetails");

        if (userDetails) {
          const userId = JSON.parse(userDetails).userId;

          if (userId && item.eventId) {
            // Create booking
            // await createBooking({
            //   eventId: item.eventId,
            //   userId: userId,
            //   bookingDetails: {
            //     calculatedPrice,
            //     optionSelect,
            //     cardNumber
            //   }
            // });

            // Save transaction details to AsyncStorage
            const s_transaction = {
              item,
              calculatedPrice,
              optionSelect,
              cardNumber,
              cardHolder,
              userId,
              bookingDate: formatDate(new Date()), // Add the booking date or any other relevant information
            };
            const existingTransactions = await AsyncStorage.getItem(
              "transactions"
            );
            const transactions = existingTransactions
              ? JSON.parse(existingTransactions)
              : [];
            const updatedTransactions = [...transactions, s_transaction];
            await AsyncStorage.setItem(
              "transactions",
              JSON.stringify(updatedTransactions)
            );
          }
        } else {
          console.log("User details not found in AsyncStorage");
        }
      } catch (error) {
        console.log("Error saving transaction in modal: ", error);
      }
    };

    handleSaveTransactions();
  }, [item, calculatedPrice, optionSelect, cardNumber, cardHolder]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={tw`flex-1 justify-center items-center px-4`}>
        <View
          style={tw`w-[98%] bg-white rounded-2xl flex flex-col items-center pb-2 pt-1 px-4`}
        >
          <View
            style={[
              tw`h-45 m-2 border border-blue-400 rounded-2xl w-full`,
              { overflow: "hidden" },
            ]}
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={[tw`rounded-lg w-full h-45 overflow-hidden`]}
            />
          </View>
          <View
            style={tw`flex flex-col w-full items-center justify-between gap-4 p-4`}
          >
            <Text style={tw`text-blue-600 text-xl font-bold`}>
              Payment Successful
            </Text>
          </View>
          <View
            style={tw`flex flex-row w-full items-center justify-between gap-4`}
          >
            <Pressable
              style={tw`bg-white  p-3 w-2/4 flex-1 items-center rounded-full border border-blue-600`}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={tw` text-blue-600 font-semibold`}>Close</Text>
            </Pressable>
            <Pressable
              style={tw`bg-blue-600  p-3 w-2/4 flex-1 items-center rounded-full`}
              onPress={handleNavigation}
            >
              <Text style={tw` text-white font-semibold`}>View Ticket</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessFailModal;

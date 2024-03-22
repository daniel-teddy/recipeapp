import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SuccessFailModal from "../components/SuccessFailModal";
export default function Payment() {
  const navigation = useNavigation();
  const [paymentInfos, setPaymentInfos] = useState(false);
  const [paid, setPaid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [discount, setDiscount] = useState("");
  const [detailsCard, setDetailsCard] = useState([]);

  const saveCardDetails = async () => {
    try {
      if (!cardHolder || !cardNumber || !cardCvv || !cardDate) {
        console.log("Incomplete card details, Please fill in all field.");
        return;
      }

      const cardDetails = {
        cardholder: cardHolder,
        cvv: cardCvv,
        cardNumber: cardNumber,
        cardExpirationDate: cardDate,
      };

      await AsyncStorage.setItem("cardDetails", JSON.stringify(cardDetails));
      await AsyncStorage.setItem("discountCode", JSON.stringify(discount));

      console.log("Card details saved successfully");

      setPaymentInfos(true);
      setPaid(true);
      setModalVisible(false);
    } catch (error) {
      console.log("Error saving card details: ", error);
    }
  };

  const getDetailsFromStorage = async () => {
    try {
      const detailsString = await AsyncStorage.getItem("cardDetails");

      if (detailsString) {
        const detailSaved = JSON.parse(detailsString);
        setDetailsCard(detailSaved);
        setCardHolder(detailSaved.cardholder);
        setCardCvv(detailSaved.cvv);
        setCardNumber(detailSaved.cardNumber);
        setCardDate(detailSaved.cardExpirationDate);
      } else {
        console.log("No details found in AsyncStorage.");
      }
    } catch (error) {
      console.error("An error occurred while getting transactions:", error);
    }
  };

  useEffect(() => {
    getDetailsFromStorage();
  }, []);

  useEffect(() => {
    if (detailsCard !== null) {
      setPaymentInfos(false);
      // console.log("Saved Card:", detailsCard);
      setCardNumber(detailsCard.cardNumber);
      setCardHolder(detailsCard.cardHolder);
      setCardDate(detailsCard.cardDate);
      setCardCvv(detailsCard.cvv);
    }
  }, [detailsCard]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleDateChange = (text) => {
    if (text.length === 2 && !text.includes(" ")) {
      text += " / ";
    }
    setCardDate(text);
  };
  const route = useRoute();
  const { item, calculatedPrice, optionSelect } = route.params;

  // useEffect(() => {
  //   // Log each value
  //   console.log("Item:", item);
  //   console.log("Calculated Price:", calculatedPrice);
  //   console.log("optionSelect:", optionSelect);
  // }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <ScrollView>
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
                    <View
                      style={tw`flex flex-row items-center justify-between`}
                    >
                      <Pressable
                        style={tw`mr-2`}
                        onPress={() =>
                          navigation.navigate("BuyTicket", { item })
                        }
                      >
                        <MaterialIcons
                          name="arrow-back"
                          size={24}
                          style={tw`text-blue-500`}
                        />
                      </Pressable>
                      <Text style={tw`text-lg font-bold`}>Payment</Text>
                    </View>
                  </View>
                  <View
                    style={tw`w-full h-[95%] flex flex-col items-start justify-between gap-8`}
                  >
                    <View
                      style={tw`w-full flex flex-col items-start justify-start gap-2`}
                    >
                      <View
                        style={tw`flex flex-col items-start justify-center w-full rounded-lg `}
                      >
                        <ImageBackground
                          source={require("../../assets/CheersCard.png")}
                          style={[tw`rounded-lg w-full overflow-hidden`]}
                        >
                          <View
                            style={tw`flex flex-col items-center justify-center`}
                          />
                          <View
                            style={tw`flex flex-row items-start justify-start mt-16 px-4 py-4 gap-3 rounded-lg`}
                          >
                            {/* Replace the static card numbers with the dynamic ones */}
                            {detailsCard.cardNumber &&
                              detailsCard.cardNumber
                                .split("")
                                .map((digit, index) => (
                                  <Text
                                    key={index}
                                    style={tw`text-white font-bold`}
                                  >
                                    {digit}
                                  </Text>
                                ))}
                          </View>
                          <View
                            style={tw`flex flex-row items-start justify-start gap-8 px-4 py-4 rounded-lg`}
                          >
                            <View
                              style={tw`flex flex-col items-start justify-start gap-3 rounded-lg`}
                            >
                              <Text style={tw`text-white font-bold`}>
                                card holder
                              </Text>
                              {/* Replace the static card holder name with the dynamic one */}
                              <Text style={tw`text-white font-bold`}>
                                {detailsCard.cardholder}
                              </Text>
                            </View>
                            <View
                              style={tw`flex flex-col items-center justify-center gap-3 rounded-lg`}
                            >
                              <Text style={tw`text-white font-bold`}>
                                Expiry date
                              </Text>
                              {/* Replace the static expiry date with the dynamic one */}
                              <Text style={tw`text-white font-bold`}>
                                {detailsCard.cardExpirationDate}
                              </Text>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                      {paymentInfos ? (
                        <>
                          <View
                            style={tw`w-full flex flex-col items-center justify-center gap-4 mt-4`}
                          >
                            <View
                              style={tw`w-full flex flex-col items-start justify-center gap-4`}
                            >
                              <Text style={tw`font-bold text-lg`}>
                                Discount coupon
                              </Text>
                              <View
                                style={tw`w-full flex flex-col items-start justify-center gap-2 rounded-xl bg-gray-200 p-4 `}
                              >
                                <View
                                  style={tw`w-full flex flex-row items-center justify-between`}
                                >
                                  <Text
                                    style={tw`text-lg text-gray-500 font-semibold`}
                                  >
                                    Applied discount coupon
                                  </Text>
                                  <Pressable
                                    style={tw` bg-red-300 p-2 rounded-xl`}
                                  >
                                    <Feather
                                      name="trash-2"
                                      size={24}
                                      style={tw``}
                                    />
                                  </Pressable>
                                </View>
                                <View
                                  style={tw`w-full flex flex-row items-center justify-start gap-4`}
                                >
                                  <Text
                                    style={tw`text-lg text-blue-500 font-semibold`}
                                  >
                                    ACARA22
                                  </Text>
                                  <View
                                    style={tw`py-1 px-3 rounded-full bg-blue-500`}
                                  >
                                    <Text style={tw`text-white font-semibold`}>
                                      15% OFF
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </>
                      ) : (
                        <>
                          <View
                            style={tw`w-full flex flex-col items-center justify-center gap-4 mt-4`}
                          >
                            <View
                              style={tw`w-full flex flex-col items-start justify-center gap-2`}
                            >
                              <Text style={tw`font-bold text-lg`}>
                                Card holder's name
                              </Text>
                              <TextInput
                                value={cardHolder}
                                autoCompleteType="off"
                                onChangeText={(value) => setCardHolder(value)}
                                style={tw`font-semibold border-2 border-blue-500 w-full px-2 py-3 rounded-full`}
                              />
                            </View>
                            <View
                              style={tw`w-full flex flex-col items-start justify-center gap-2`}
                            >
                              <Text style={tw`font-bold text-lg`}>
                                Card number
                              </Text>
                              <TextInput
                                value={cardNumber}
                                keyboardType="numeric"
                                autoCompleteType="off"
                                onChangeText={(value) => setCardNumber(value)}
                                style={tw`font-semibold border-2 border-blue-500 w-full px-2 py-3 rounded-full`}
                              />
                            </View>

                            <View
                              style={tw`w-full flex flex-row items-center justify-between gap-2`}
                            >
                              <View
                                style={tw`w-2/6 flex flex-col items-start justify-center gap-2`}
                              >
                                <Text style={tw`font-bold text-lg`}>
                                  Expiry date
                                </Text>
                                <TextInput
                                  value={cardDate}
                                  maxLength={7}
                                  placeholder="MM / YYYY"
                                  onChangeText={handleDateChange}
                                  keyboardType="numeric"
                                  style={tw`font-semibold border-2 border-blue-500 text-center w-full px-2 py-3 rounded-full`}
                                />
                              </View>
                              <View
                                style={tw`w-1/6 flex flex-col items-start justify-center gap-2`}
                              >
                                <Text style={tw`font-bold text-lg`}>CVV</Text>
                                <TextInput
                                  keyboardType="numeric"
                                  value={cardCvv}
                                  maxLength={3}
                                  onChangeText={(value) => setCardCvv(value)}
                                  style={tw`font-semibold border-2 border-blue-500 w-full px-2 py-3 text-center rounded-full`}
                                />
                              </View>
                            </View>
                            <View
                              style={tw`w-full flex flex-col items-start justify-center gap-2`}
                            >
                              <Text style={tw`font-bold text-lg`}>
                                Discount Coupon
                              </Text>
                              <TextInput
                                value={discount}
                                maxLength={7}
                                onChangeText={(text) => setDiscount(text)}
                                placeholder="Enter your discount code"
                                autoCompleteType="off"
                                style={tw`font-semibold border-2 border-blue-500 w-full px-5 py-3 rounded-full`}
                              />
                            </View>
                          </View>
                        </>
                      )}
                    </View>
                    <View
                      style={tw`w-full flex flex-col items-center justify-center gap-1`}
                    >
                      {!paymentInfos ? (
                        <View
                          style={tw`w-full flex flex-row items-center justify-between`}
                        >
                          <Pressable
                            onPress={() => {
                              saveCardDetails();
                              setPaid(!paid);
                            }}
                            style={tw`w-full bg-blue-500 p-3 flex-1 items-center justify-center rounded-full`}
                          >
                            <Text style={tw`text-lg text-white font-semibold`}>
                              Continue
                            </Text>
                          </Pressable>
                        </View>
                      ) : (
                        <>
                          <View
                            style={tw`w-full flex flex-row items-center justify-center gap-4`}
                          >
                            <Text style={tw`text-lg font-semibold`}>
                              Total :
                            </Text>
                            <Text
                              style={tw`text-lg font-semibold line-through text-red-400`}
                            >
                              {calculatedPrice.toFixed(2)}
                            </Text>
                            <Text style={tw`text-lg font-bold text-green-700`}>
                              ${" "}
                              {(
                                calculatedPrice -
                                calculatedPrice * 0.15
                              ).toFixed(2)}
                            </Text>
                          </View>
                          <View
                            style={tw`w-full flex flex-row items-center justify-between mb-40`}
                          >
                            <Pressable
                              onPress={async () => {
                                // await saveCardDetails();
                                setPaid(!paid);
                              }}
                              style={tw`w-full bg-blue-500 p-3 flex-1 items-center justify-center rounded-full`}
                            >
                              <Text
                                style={tw`text-lg text-white font-semibold`}
                              >
                                Confirm Payment
                              </Text>
                            </Pressable>
                          </View>
                        </>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {paid && (
              <SuccessFailModal
                onClose={handleCloseModal}
                item={item}
                calculatedPrice={calculatedPrice}
                optionSelect={optionSelect}
                cardNumber={cardNumber}
                cardHolder={cardHolder} // Pass the selected item to the BookmarkModal
              />
            )}
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

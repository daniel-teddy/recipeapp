import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import tw from "twrnc";

const QRCodeGenerator = ({ item, userData }) => {
  const itemName = item.item.eventName;
  const email = userData.email;
  const firstName = userData.firstName + " " + userData.lastName;
  // const lastName = userData.lastName;
  const places = 4;
  const jsonString = JSON.stringify([
    itemName,
    email,
    firstName,
    // lastName,
    places,
  ]);

  return (
    <View style={tw`flex-1 p-8 pt-10 items-center justify-center`}>
      <QRCode value={jsonString} size={150} />
    </View>
  );
};

export default QRCodeGenerator;

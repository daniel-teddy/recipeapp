import { View } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";

const MapsComponent = ({item}) => {


  return (
    <View
      style={tw`flex flex-col items-center h-48 justify-between w-full mt-2 px-2`}
    >
      {item && (
        <MapView
          style={tw`flex-1 w-full rounded-lg `}
          initialRegion={{
            latitude: item.locationLatitude,
            longitude: item.locationLongitude,
            // latitude: 37.78825,
            // longitude: -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: item.locationLatitude,
              longitude: item.locationLongitude,
            // latitude: 37.78825,
            // longitude: -122.4324,
            }}
            title={item.eventName || "place name"}
            description={item.description || "place description"}
          />
        </MapView>
      )}
    </View>
  );
};

export default MapsComponent;

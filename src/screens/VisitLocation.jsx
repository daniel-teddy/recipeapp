import { View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { GOOGLE_MAPS_KEY } from "@env";
import { StatusBar } from "expo-status-bar";

export default VisitLocation = () => {
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [placeDescription, setPlaceDescription] = useState([]);
  const [transportMode, setTransportMode] = useState("DRIVING");
  const tModes = [
    {
      id: 1,
      mode: "DRIVING",
    },
    {
      id: 2,
      mode: "WALKING",
    },
    {
      id: 3,
      mode: "TRANSIT",
    },
  ];

  const handleTransportMode = () => {
    // logic goes here
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      try {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);
      } catch (error) {
        setErrorMsg("Error getting location");
        console.log(errorMsg);
      }
    })();
  }, []);

  return (
    <GestureHandlerRootView>
      <View style={tw`h-full w-full flex-col items-center justify-start`}>
        <View style={tw`flex-1 w-full h-full`}>
          <View style={tw`flex-1 w-full h-full`}>
            {userLocation && (
              <MapView
                style={tw`flex-1 w-full rounded-lg`}
                initialRegion={{
                  latitude: userLocation.coords.latitude,
                  longitude: userLocation.coords.longitude,
                  latitudeDelta: 0.025,
                  longitudeDelta: 0.025,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: userLocation.coords.latitude,
                    longitude: userLocation.coords.longitude,
                  }}
                  title="You are here"
                ></Marker>

                <>
                  <MapViewDirections
                    origin={{
                      latitude: userLocation.coords.latitude,
                      longitude: userLocation.coords.longitude,
                    }}
                    destination={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                    }}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeColor="black"
                    mode="WALKING"
                    strokeWidth={4}
                    onReady={(result) => {
                      console.log("Result:", result.distance, "km");
                    }}
                  />
                  <Marker
                    coordinate={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                    }}
                    title={placeDescription}
                    // description={"distance is :"}
                  >
                    {/* <Image
                                    source={{
                                      uri: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png",
                                    }}
                                    style={tw`h-[2.5rem] w-[2rem]`}
                                  /> */}
                  </Marker>
                </>
              </MapView>
            )}
          </View>

          <View
            style={tw`flex flex-col items-center justify-center z-70 absolute top-10 left-1 p-2 `}
          >
            <Pressable style={tw``} onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={34}
                style={tw`text-black font-bold`}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </GestureHandlerRootView>
  );
};

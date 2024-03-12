import { View } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker, Circle } from "react-native-maps";
import tw from "twrnc";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MapsScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

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
        // console.log('Latitude:', userLocation.coords.latitude);
        // console.log('Longitude:', userLocation.coords.longitude);
      } catch (error) {
        setErrorMsg("Error getting location");
        console.log(errorMsg);
      }
    })();
  }, []);
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const handleEventPress = (item) => {
    navigation.navigate("EventDetails", { item });
  };
  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/events", {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        const eventsString = JSON.stringify(result);
        await AsyncStorage.setItem("events", eventsString);
        setEvents(result.events);
      } else {
        const errorData = await response.json();
        console.log("Error", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching events:", error);
    }
  };

  // console.log("events: ", events);

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <View>
      <View
        style={tw`flex flex-col items-center h-full justify-between w-full mb-1`}
      >
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
              // description="Place Description"
            />
            <Circle
              center={{
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude,
              }}
              radius={1000}
              strokeColor="rgba(0, 122, 255, 0.3)"
              fillColor="rgba(0, 122, 255, 0.1)"
            />
            {events.map((event) => (
              <Marker
                key={event.eventId}
                coordinate={{
                  latitude: event.locationLatitude,
                  longitude: event.locationLongitude,
                }}
                title={event.eventName}
                onPress={() => handleEventPress(event)}
              />
            ))}
          </MapView>
        )}
      </View>
    </View>
  );
};

export default MapsScreen;

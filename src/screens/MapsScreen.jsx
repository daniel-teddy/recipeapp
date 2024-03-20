import { FlatList, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RenderSearch from "../components/RenderSearch";

const MapsScreen = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const categ = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 5,
      title: "Hospitals",
    },
    {
      id: 2,
      title: "Restaurants & Hotels",
    },
    {
      id: 3,
      title: "Government",
    },
    {
      id: 4,
      title: "Banks",
    },
  ];
  const [pressedCategory, setPressedCategory] = useState(categ[0].id);
  const getXevents = async () => {
    try {
      const response = await fetch(
        "https://crypto-news-api.onrender.com/events",
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const result = await response.json();
        const eventsString = JSON.stringify(result);
        await AsyncStorage.setItem("events", eventsString);
        setEvents(result);
        // console.log("getXevents", eventsString);
        // console.log("getXevents", JSON.stringify(events));
      } else {
        const errorData = await response.json();
        console.log("Error", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching events:", error);
    }
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
        // console.log('Latitude:', userLocation.coords.latitude);
        // console.log('Longitude:', userLocation.coords.longitude);
      } catch (error) {
        setErrorMsg("Error getting location");
        console.log(errorMsg);
      }
    })();
    getXevents();
  }, []);
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const handleEventPress = (item) => {
    navigation.navigate("EventDetails", { item });
  };

  // console.log("events: ", events);

  return (
    <View>
      <View
        style={tw`flex flex-row items-center justify-center gap-2 z-70 absolute pt-10 w-full bg-white pb-2`}
      >
        <FlatList
          data={categ}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <RenderSearch
              item={item}
              pressedCategory={pressedCategory}
              onPress={setPressedCategory}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={tw`flex flex-col items-center h-full justify-between w-full mb-1`}
      >
        {userLocation && (
          <MapView
            style={tw`flex-1 w-full rounded-lg`}
            initialRegion={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
              latitudeDelta: 0.012,
              longitudeDelta: 0.012,
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

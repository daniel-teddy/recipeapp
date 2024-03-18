import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import SearchBar from "../components/SearchBar";
import RenderSearch from "../components/RenderSearch";
import RenderSearchThing from "../components/RenderSearchThing";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import MapView, { Circle, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
export default function SearchScreen() {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const [place, setPlace] = useState();
  const [placeDescription, setPlaceDescription] = useState([]);
  const [searchType, setSearchType] = useState("Places");

  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const handleFilter = (value) => {
    setSearchType(value);
  };
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
        // console.log("Latitude:", userLocation.coords.latitude);
        // console.log("Longitude:", userLocation.coords.longitude);
      } catch (error) {
        setErrorMsg("Error getting location");
        console.log(errorMsg);
      }
    })();
    getXevents();
    // console.log("place:", placeDescription);
  }, [place]);

  const categ = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 5,
      title: "Music",
    },
    {
      id: 2,
      title: "Technology",
    },
    {
      id: 3,
      title: "Community",
    },
    {
      id: 4,
      title: "Relax",
    },
  ];
  const [pressedCategory, setPressedCategory] = useState(categ[0].id);
  // const [bookMarked, setBookMarked] = useState(true);

  const handleEventPress = (item) => {
    navigation.navigate("EventDetails", { item });
  };

  const handlePressDeleteEvents = async () => {
    try {
      await AsyncStorage.removeItem("events");
      console.log(
        "AsyncStorage Cleared",
        "All data has been removed from AsyncStorage."
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
              style={tw`h-full w-full flex-col items-center justify-start pb-34`}
            >
              <View
                style={tw`flex flex-col items-center justify-start w-full h-full p-2 `}
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
                    <Text style={tw`text-lg font-medium`}>Search</Text>
                  </View>
                  {/* <Pressable style={tw`p-1 bg-blue-200 rounded-md`}  onPress={handlePressDeleteEvents}>
                    <MaterialIcons
                      name="search"
                      color="black"
                      size={24}
                    />
                  </Pressable> */}
                  <Pressable
                    style={tw`p-1 bg-blue-200 rounded-md`}
                    onPress={() => navigation.navigate("Bookmark")}
                  >
                    <MaterialIcons name="bookmark" color="black" size={24} />
                  </Pressable>
                </View>
                <View style={tw`w-full h-full`}>
                  <View
                    style={tw`w-full flex flex-row items-center justify-between px-2 mb-4 mt-4`}
                  >
                    {["Places", "Events"].map((type) => (
                      <Pressable key={type} onPress={() => handleFilter(type)}>
                        <Text
                          style={tw`text-xl font-bold ${
                            searchType === type
                              ? "text-red-500"
                              : "text-gray-500"
                          }`}
                        >
                          {type}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                  {searchType === "Places" && (
                    <View>
                      <View
                        style={tw`w-full flex flex-col items-center justify-center px-2 mt-2`}
                      >
                        <GooglePlacesAutocomplete
                          nearbyPlacesAPI="GooglePlaceSearch"
                          debounce={200}
                          placeholder="Search for places ..."
                          query={{
                            key: GOOGLE_MAPS_KEY,
                            language: "en",
                          }}
                          onPress={(data, details) => {
                            setPlace(details.geometry.location);
                            setPlaceDescription(data.description);
                            // console.log("details: ", details.geometry.location);
                          }}
                          fetchDetails={true}
                          returnKeyType={"search"}
                          minLength={2}
                          enablePoweredByContainer={false}
                          styles={{
                            container: {
                              flex: 0,
                              width: "100%",
                            },
                            textInput: {
                              backgroundColor: "#e5e7eb",
                              fontSize: 18,
                            },
                          }}
                        />
                      </View>
                      <View
                        style={tw`flex px-2 flex-col items-center h-140 justify-center w-full py-1 bottom-0`}
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
                            >
                              {/* <Image
                                source={{
                                  uri: "https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-8/25/Person-Location-2-512.png",
                                }}
                                style={tw`h-[2.5rem] w-[2rem]`}
                              /> */}
                            </Marker>

                            {place ? (
                              <>
                                <MapViewDirections
                                  origin={{
                                    latitude: userLocation.coords.latitude,
                                    longitude: userLocation.coords.longitude,
                                  }}
                                  destination={{
                                    latitude: place.lat,
                                    longitude: place.lng,
                                  }}
                                  apikey={GOOGLE_MAPS_KEY}
                                  strokeColor="black"
                                  strokeWidth={4}
                                />
                                <Marker
                                  coordinate={{
                                    latitude: place.lat,
                                    longitude: place.lng,
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
                            ) : (
                              <Circle
                                center={{
                                  latitude: userLocation.coords.latitude,
                                  longitude: userLocation.coords.longitude,
                                }}
                                radius={900}
                                strokeColor="rgba(0, 122, 255, 0.3)"
                                fillColor="rgba(0, 122, 255, 0.1)"
                              />
                            )}
                          </MapView>
                        )}
                      </View>
                    </View>
                  )}
                  {searchType === "Events" && (
                    <>
                      <SearchBar />
                      <View style={tw`w-full`}>
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
                          keyExtractor={(item) => item.id.toString()} // Ensure key is a string
                        />
                      </View>
                      <View style={tw`w-full`}>
                        <FlatList
                          data={events}
                          keyExtractor={(item) => item.eventId.toString()}
                          vertical
                          showsVerticalScrollIndicator={false}
                          renderItem={({ item }) => (
                            <RenderSearchThing
                              style={tw`w-full h-full px-1`}
                              item={item}
                              // bookMarked={bookMarked}
                              onPress={handleEventPress}
                            />
                          )}
                        />
                      </View>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

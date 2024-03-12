import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
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
export default function SearchScreen() {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const [place, setPlace] = useState([]);
  const [searchType, setSearchType] = useState("Places");
  // const [filter, setFilter] = useState("Categories");

  const handleFilter = (value) => {
    setSearchType(value);
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
  const [bookMarked, setBookMarked] = useState(true);

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
                          onPress={(item) => {
                            // console.log("details: ", item);
                            setPlace(item);
                            console.log("details: ", item);
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
                        {place && place.length > 0 ? (
                          <MapView
                            style={tw`flex-1 w-full rounded-lg`}
                            initialRegion={{
                              latitude: 48.8588,
                              longitude: 2.2944,
                              latitudeDelta: 0.025,
                              longitudeDelta: 0.025,
                            }}
                          >
                            <Marker
                              coordinate={{
                                latitude: 48.8588,
                                longitude: 2.2944,
                              }}
                              title="You are here"
                              // description="Place Description"
                            />
                          </MapView>
                        ) : (
                          <Text>Start searching ...</Text>
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
                              bookMarked={bookMarked}
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

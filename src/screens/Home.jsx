import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import RenderCategories from "../components/RenderCategories";
import { useNavigation } from "@react-navigation/native";
import RenderStatus from "../components/RenderStatus";
import RenderEvents from "../components/RenderEvents";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useAuth } from "../../auth/AuthContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);

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

  const handlePlacePress = (item) => {
    navigation.navigate("PlaceDetails", { item });
  };

  const randomItems = events.sort(() => Math.random() - 0.5);
  let selectedElementsRandom = randomItems.slice(0, 8);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const openModal = (item) => {
    setSelectedGalleryItem(item);
    setModalVisible(true);
    console.log("first ", selectedGalleryItem);
  };

  const closeModal = () => {
    setSelectedGalleryItem(null);
    console.log("first ", selectedGalleryItem);
    setModalVisible(false);
  };

  return (
    <SafeAreaView
      style={tw`flex-1 w-full p-2 flex flex-col items-start justify-start gap-4 bg-white`}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tw`flex-1 w-full`}
      >
        <View
          style={tw`w-full flex flex-row items-center justify-between px-2 mb-2`}
        >
          <Text style={tw`text-red-500 text-3xl font-bold`}>TravelGo</Text>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <AntDesign
              name="search1"
              size={34}
              style={tw`text-black font-bold`}
            />
          </Pressable>
        </View>

        <View
          style={tw`flex flex-col items-start justify-center w-full rounded-lg px-2 mb-2`}
        >
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={[tw`rounded-lg w-full h-45 overflow-hidden`]}
          >
            <View style={tw`flex flex-col items-center justify-center`} />
            <View
              style={tw`flex flex-col items-start justify-end h-full p-4 rounded-lg`}
            >
              <Text style={tw`text-white text-lg font-bold`}>
                Merit Hotel & Casino
              </Text>
              <View
                style={tw`bg-blue-500 flex flex-col items-center justify-center p-2 px-4 rounded-full`}
              >
                <Pressable>
                  <Text style={tw`text-white font-bold`}>Visit !</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={tw`flex flex-row items-center justify-between w-full mt-3 pb-2 px-2`}
        >
          <Pressable onPress={() => navigation.navigate("Trending")}>
            <Text style={tw`text-slate-800 font-bold`}>Stories</Text>
          </Pressable>
        </View>
        <View style={tw`mb-2`}>
          <FlatList
            data={[...events.slice(0, 8)]}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw``}
            renderItem={({ item }) => (
              <Pressable onPress={() => openModal({ item })}>
                <RenderStatus item={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item.eventId.toString()}
          />
        </View>
        <View
          style={tw`flex flex-row items-center justify-between w-full mt-3 px-2 mb-2`}
        >
          <Pressable onPress={() => navigation.navigate("Trending")}>
            <Text style={tw`text-slate-800 font-bold`}>Places</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Text style={tw`text-blue-500 font-bold`}>See All</Text>
          </Pressable>
        </View>
        <View style={tw`mb-2`}>
          <FlatList
            data={selectedElementsRandom}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <RenderEvents item={item} onPress={handlePlacePress} />
            )}
            keyExtractor={(item) => item.eventId.toString()}
          />
        </View>
        <View
          style={tw`flex flex-row items-center justify-between w-full mt-3 px-2 mb-2`}
        >
          <Pressable onPress={() => navigation.navigate("Trending")}>
            <Text style={tw`text-slate-800 font-bold`}>Events</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Text style={tw`text-blue-500 font-bold`}>See All</Text>
          </Pressable>
        </View>
        <View style={tw`mb-2`}>
          <FlatList
            data={events}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <RenderCategories item={item} />}
            keyExtractor={(item) => item.eventId.toString()}
          />
        </View>
        <View
          style={tw`flex flex-row items-center justify-between w-full mt-3 px-2 mb-2`}
        >
          <Pressable onPress={() => navigation.navigate("Trending")}>
            <Text style={tw`text-slate-800 font-bold`}>Popular</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Search")}>
            <Text style={tw`text-blue-500 font-bold`}>See All</Text>
          </Pressable>
        </View>
        <View style={tw`mb-2`}>
          <FlatList
            data={events}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <RenderCategories item={item} />}
            keyExtractor={(item) => item.eventId.toString()}
          />
        </View>
      </ScrollView>
      {isModalVisible && (
        <View style={tw`h-full w-full flex-col items-center justify-start `}>
          <View style={tw`flex-1 w-full h-full`}>
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent
              style={tw`flex-1  w-full h-full`}
            >
              <View
                style={tw`bg-slate-800 flex-1 h-full opacity-80 bottom-0 absolute w-full`}
              ></View>
              <View
                style={tw`flex-1 h-full w-full justify-center items-center`}
              >
                <View
                  style={tw` rounded h-full  shadow-lg z-50 w-full flex flex-col items-center justify-center`}
                >
                  <ImageBackground
                    source={{
                      uri:
                        selectedGalleryItem.imageUrl ||
                        "https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                    }}
                    style={[tw`rounded-lg w-full h-full overflow-hidden`]}
                  >
                    <View
                      style={tw`flex flex-col items-center justify-center`}
                    />
                    <View
                      style={tw`flex flex-col items-start justify-start h-full p-4 rounded-lg`}
                    >
                      <View
                        style={tw`bg-blue-500 flex flex-col items-center justify-center p-2 px-4 mt-12 rounded-full`}
                      >
                        <Pressable onPress={closeModal}>
                          <Text style={tw`text-white font-bold`}>close !</Text>
                        </Pressable>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

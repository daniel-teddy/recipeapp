import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RenderCategories from "../components/RenderCategories";
import RenderIngredients from "../components/RenderIngredients";
import RenderIngredientsScroll from "../components/RenderIngredientsScroll";
import { useNavigation } from "@react-navigation/native";
import RenderStatus from "../components/RenderStatus";
import RenderEvents from "../components/RenderEvents";

const HomeScreen = () => {
  const navigation = useNavigation();
  const foodTypes = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Starters",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Soup",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Lunch",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Desserts",
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Dinner",
    },
    {
      id: 6,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Salad",
    },
  ];
  const foodIngredientsTypes = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Starters",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Soup",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Lunch",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Desserts",
    },
    {
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Dinner",
    },
    {
      id: 6,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Salad",
    },
    {
      id: 7,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Starters",
    },
    {
      id: 8,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Soup",
    },
    {
      id: 9,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Lunch",
    },
    {
      id: 10,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Desserts",
    },
    {
      id: 11,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Dinner",
    },
    {
      id: 12,
      imageUrl:
        "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Salad",
    },
  ];
  const [filter, setFilter] = useState("Places");


  const handlePlacePress = (item) => {
    navigation.navigate('PlaceDetails', { item });
  };
  return (
    <SafeAreaView
      style={tw`flex-1 w-full p-2 flex flex-col items-start justify-start gap-4 bg-white`}
    >
      <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`flex-1 w-full`}
        >
      <View style={tw`w-full flex flex-row items-center justify-between px-2`}>
        <Text style={tw`text-red-500 text-3xl font-bold`}>TravelGo</Text>
         <Pressable onPress={() => navigation.navigate("Search")}>
        <Text style={tw` text-xl font-bold`}>Search</Text>
      </Pressable> 
      </View>

      <View
        style={tw`flex flex-col items-start justify-center w-full rounded-lg px-2`}
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
            <Text style={tw`text-white text-lg font-bold`}>Music Festival</Text>
            <View
              style={tw`bg-blue-500 flex flex-col items-center justify-center p-3 px-6 rounded-full`}
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
      <View>
        <FlatList
          data={foodTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw``}
          renderItem={({ item }) => <RenderStatus item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={tw`flex flex-row items-center justify-between w-full mt-3 px-2`}
      >
        <Pressable onPress={() => navigation.navigate("Trending")}>
          <Text style={tw`text-slate-800 font-bold`}>Places</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Search")}>
          <Text style={tw`text-blue-500 font-bold`}>See All</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={foodTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderEvents item={item} onPress={handlePlacePress} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={tw`flex flex-row items-center justify-between w-full mt-3 px-2`}
      >
        <Pressable onPress={() => navigation.navigate("Trending")}>
          <Text style={tw`text-slate-800 font-bold`}>Events</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Search")}>
          <Text style={tw`text-blue-500 font-bold`}>See All</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={foodTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderCategories item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={tw`flex flex-row items-center justify-between w-full mt-3 px-2`}
      >
        <Pressable onPress={() => navigation.navigate("Trending")}>
          <Text style={tw`text-slate-800 font-bold`}>Events</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Search")}>
          <Text style={tw`text-blue-500 font-bold`}>See All</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={foodTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderCategories item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import RenderCategories from "../components/RenderCategories";
import RenderIngredients from "../components/RenderIngredients";
import RenderIngredientsScroll from "../components/RenderIngredientsScroll";
// import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  // const navigation = useNavigation();
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
  const [filter, setFilter] = useState("Categories");

  const handleFilter = (value) => {
    setFilter(value);
  };
  return (
    <SafeAreaView
      style={tw`flex-1 w-full p-2 flex flex-col items-start justify-start gap-4 bg-white`}
    >
      <View style={tw`w-full flex flex-row items-center justify-between px-2`}>
        <Text style={tw`text-red-500 text-3xl font-bold`}>FireFoods</Text>
        {/* <Text style={tw` text-xl font-bold`}>Notify</Text> */}
      </View>
      <View style={tw`w-full flex flex-row items-center justify-around`}>
        {["Categories", "Ingredients"].map((type) => (
          <Pressable key={type} onPress={() => handleFilter(type)}>
            <Text
              style={tw`text-xl font-bold ${
                filter === type ? "text-red-500" : "text-gray-500"
              }`}
            >
              {type}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={tw`w-full flex flex-col items-center justify-center px-2`}>
        <TextInput
          placeholder="Search for food or ingredient..."
          style={tw`w-full bg-gray-200 px-2 py-3 rounded-md`}
        />
      </View>
      {/* <Pressable onPress={() => navigation.navigate("SearchScreen")}>
          <Text style={tw` text-xl font-bold`}>Notify</Text>
          </Pressable> */}
      {filter === "Categories" && (
        <View>
          <FlatList
            data={foodTypes}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={tw`flex gap-2`}
            renderItem={({ item }) => <RenderCategories item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
      {filter === "Ingredients" && (
        <>
          <View style={tw`flex flex-col items-center justify-center h-12`}>
            <FlatList
              data={foodTypes}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <RenderIngredientsScroll item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={tw`flex-1`}>
            <FlatList
              data={foodIngredientsTypes}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <RenderIngredients item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

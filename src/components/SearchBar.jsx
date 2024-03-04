import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import tw from "twrnc";

const SearchBar = () => {
  return (
    <View style={tw`m-[10] w-full flex flex-row items-center justify-start`}>
      <View
        style={styles.searchBar__unclicked }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={tw`font-medium ml-[10] w-[90%]`}
          placeholder="Search"
        />
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({

  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
});
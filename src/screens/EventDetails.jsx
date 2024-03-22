import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  Pressable,
  SafeAreaView,
  Share,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tw from "twrnc";
import MapsComponent from "../components/MapsComponent";
import RenderPlaceGallery from "../components/RenderPlaceGallery";
import RenderEmptyPlaceGallery from "../components/RenderEmptyPlaceGallery";

export default function EventDetails() {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
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
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  const EventTextShared = item.eventName + " " + item.Description;
  const eventShared = item.image;
  const ShareContent = async () => {
    try {
      const result = await Share.share({
        message: EventTextShared,
        url: eventShared,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // console.log(`Shared via ${result.activityType}`);
        } else {
          // console.log('Share dismissed');
        }
      } else if (result.action === Share.dismissedAction) {
        // console.log('Share dismissed');
      }
    } catch (error) {
      console.error("Error sharing content:", error.message);
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const openModal = (item) => {
    setSelectedGalleryItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedGalleryItem(null);
    setModalVisible(false);
  };

  return (
    <GestureHandlerRootView>
      <View
        style={[
          tw`h-full w-full flex-col items-center justify-start`,
          isModalVisible && tw`opacity-40`,
        ]}
      >
        <View style={tw`flex-1 w-full h-full`}>
          <View
            style={tw`h-full w-full flex-col items-center justify-start z-70 absolute top-[-0.1rem]`}
          >
            <View
              style={tw`flex flex-col items-center justify-start w-full h-full gap-1 `}
            >
              <Image
                style={[tw`w-full h-[16rem] `, { resizeMode: "cover" }]}
                source={{
                  uri: item.image,
                }}
              />
              <SafeAreaView style={tw`flex-1 w-full h-full flex flex-col`}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={tw`flex-1 w-full h-full`}
                >
                  <View
                    style={tw`flex flex-row items-center justify-between w-full h-12 px-2 `}
                  >
                    <Text style={tw`text-xl font-semibold`}>
                      {item.eventName && item.eventName.length > 17
                        ? item.eventName.substring(0, 19) + " ..."
                        : item.eventName || "eventName"}
                    </Text>
                    <Pressable
                      onPress={() => navigation.navigate("BuyTicket", { item })}
                      style={tw`flex flex-col bg-blue-500 items-center justify-center border-2 border-blue-500 rounded-lg  p-2`}
                    >
                      <Text style={tw`text-white font-semibold`}>
                        Buy Tickets
                      </Text>
                    </Pressable>
                  </View>
                  <View
                    style={tw`flex flex-row items-center justify-between w-full h-12 px-2 `}
                  >
                    <View
                      style={tw`flex flex-row items-center justify-start  h-16 gap-2 py-2`}
                    >
                      <Pressable style={tw``}>
                        <MaterialIcons
                          name="location-on"
                          color="black"
                          size={25}
                        />
                      </Pressable>
                      <Text style={tw`font-medium`}>
                        {item.location.link && item.location.link.length > 22
                          ? item.location.link.substring(0, 24) + " ..."
                          : item.location.link || "eventAddress"}
                      </Text>
                    </View>
                    <View
                      style={tw`flex flex-row items-center justify-start gap-4`}
                    >
                      <Pressable
                        onPress={ShareContent}
                        style={tw`p-3 bg-blue-200 rounded-full`}
                      >
                        <MaterialIcons
                          name="share"
                          size={15}
                          style={tw`text-black font-bold`}
                        />
                      </Pressable>
                      <Pressable style={tw`p-3 bg-blue-200 rounded-full`}>
                        <MaterialIcons
                          name="bookmark-border"
                          size={15}
                          style={tw`text-black font-bold`}
                        />
                      </Pressable>
                    </View>
                  </View>
                  <View
                    style={tw`flex flex-col items-start justify-center ml-1 p-2 gap-2 border-l-4 rounded border-blue-500 mb-2`}
                  >
                    <Text>About :</Text>
                    <Text>{item.description}</Text>
                  </View>
                  <View style={tw`p-2 mb-2`}>
                    <Text style={tw`text-blue-500 font-bold`}>
                      Event Gallery
                    </Text>
                  </View>
                  <View style={tw`mb-2`}>
                    <FlatList
                      data={[...foodTypes.slice(0, 4)]}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <Pressable onPress={() => openModal(item)}>
                          <RenderPlaceGallery item={item} />
                        </Pressable>
                      )}
                      keyExtractor={(item) => item.id.toString()}
                      ListFooterComponent={() =>
                        foodTypes.length > 4 && (
                          <RenderEmptyPlaceGallery
                            remaining={foodTypes.length - 4}
                          />
                        )
                      }
                    />
                  </View>

                  <View
                    style={tw`flex flex-col items-start justify-center ml-1 p-2 gap-2 border-l-4 rounded border-orange-500 my-2`}
                  >
                    <Text>Location :</Text>
                  </View>
                  <MapsComponent item={item} />
                  <View
                    style={tw`flex flex-col items-start justify-center ml-1 p-2 gap-2 border-l-4 rounded border-blue-500 my-2`}
                  >
                    <Text>Opening hours</Text>
                    <Text>
                      Monday - Saturday :{" "}
                      {formatDate(item.date_range.start_date)}
                    </Text>
                  </View>
                  <View
                    style={tw`flex flex-col items-start justify-center ml-1 p-2 gap-2 border-l-4 rounded border-red-500 my-2`}
                  >
                    <Text>Established </Text>
                    <Text>Since {item.date_range.end_date}</Text>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </View>
          </View>
          <View
            style={tw`flex flex-col items-center justify-center z-70 absolute top-10 left-1 p-2 `}
          >
            <Pressable style={tw``} onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={34}
                style={tw`text-white font-bold`}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
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
                  style={tw`p-4 rounded h-full  shadow-lg z-50 w-full flex flex-col items-center justify-center`}
                >
                  <Pressable
                    onPress={closeModal}
                    style={tw`flex flex-row items-center justify-end mb-4 bg-red-200 rounded-lg p-2`}
                  >
                    <Text>Close Modal</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </Pressable>
                  <Image
                    style={[
                      tw`w-full h-[16rem] rounded-lg `,
                      { resizeMode: "cover" },
                    ]}
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </View>
      )}
    </GestureHandlerRootView>
  );
}

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
import React, { useState } from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import RenderCategories from "../components/RenderCategories";
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

  const handlePlacePress = (item) => {
    navigation.navigate("PlaceDetails", { item });
  };

  const placesEvents = [
    {
      eventId: 1,
      eventName: "Music Festival",
      description: "A weekend of live music and fun",
      date: "2023-07-15",
      time: "18:00:00",
      locationLatitude: 37.7749,
      locationLongitude: -122.419,
      address: "123 Main St, Cityville",
      imageUrl:
        "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Music",
      organizerId: 1,
    },
    {
      eventId: 2,
      eventName: "Community Picnic",
      description: "Join us for a day of food and games",
      date: "2023-08-20",
      time: "12:00:00",
      locationLatitude: 34.0522,
      locationLongitude: -118.244,
      address: "456 Park Ave, Townsville",
      imageUrl:
        "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Community",
      organizerId: 2,
    },
    {
      eventId: 3,
      eventName: "Tech Conference",
      description: "Explore the latest in technology",
      date: "2023-09-25",
      time: "09:00:00",
      locationLatitude: 40.7128,
      locationLongitude: -74.006,
      address: "789 Tech Blvd, Tech City",
      imageUrl:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Technology",
      organizerId: 3,
    },
    {
      eventId: 46,
      eventName: "Music Festival",
      description: "A weekend of live music and fun",
      date: "2023-07-15",
      time: "18:00:00",
      locationLatitude: 37.7749,
      locationLongitude: -122.419,
      address: "123 Main St, Cityville",
      imageUrl:
        "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Music",
      organizerId: 1,
    },
    {
      eventId: 47,
      eventName: "Community Picnic",
      description: "Join us for a day of food and games",
      date: "2023-08-20",
      time: "12:00:00",
      locationLatitude: 34.0522,
      locationLongitude: -118.244,
      address: "456 Park Ave, Townsville",
      imageUrl:
        "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Community",
      organizerId: 2,
    },
    {
      eventId: 48,
      eventName: "Tech Conference",
      description: "Explore the latest in technology",
      date: "2023-09-25",
      time: "09:00:00",
      locationLatitude: 40.7128,
      locationLongitude: -74.006,
      address: "789 Tech Blvd, Tech City",
      imageUrl:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Technology",
      organizerId: 3,
    },
    {
      eventId: 49,
      eventName: "Art Exhibition",
      description: "An evening showcasing local artworks",
      date: "2023-10-10",
      time: "17:30:00",
      locationLatitude: 41.8781,
      locationLongitude: -87.6298,
      address: "234 Art Street, Artville",
      imageUrl:
        "https://images.pexels.com/photos/2082418/pexels-photo-2082418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Art",
      organizerId: 4,
    },
    {
      eventId: 50,
      eventName: "Fitness Bootcamp",
      description: "Get fit with high-intensity workouts",
      date: "2023-11-05",
      time: "07:00:00",
      locationLatitude: 33.4484,
      locationLongitude: -112.074,
      address: "567 Fit Avenue, Fitland",
      imageUrl:
        "https://images.pexels.com/photos/3961273/pexels-photo-3961273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Fitness",
      organizerId: 5,
    },
    {
      eventId: 51,
      eventName: "Science Fair",
      description: "Discover the wonders of science",
      date: "2023-12-15",
      time: "14:00:00",
      locationLatitude: 37.7749,
      locationLongitude: -122.419,
      address: "890 Science Lane, Sciencetown",
      imageUrl:
        "https://images.pexels.com/photos/3070085/pexels-photo-3070085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Science",
      organizerId: 6,
    },
    {
      eventId: 52,
      eventName: "Food Festival",
      description: "A culinary delight with diverse cuisines",
      date: "2024-01-20",
      time: "16:30:00",
      locationLatitude: 41.8781,
      locationLongitude: -87.6298,
      address: "789 Culinary Street, Foodtown",
      imageUrl:
        "https://images.pexels.com/photos/33783/food-cooking-espresso-pannikin.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Food",
      organizerId: 1,
    },
    {
      eventId: 53,
      eventName: "Film Screening",
      description: "Enjoy an evening of cinematic brilliance",
      date: "2024-02-12",
      time: "19:00:00",
      locationLatitude: 34.0522,
      locationLongitude: -118.244,
      address: "345 Cinema Road, Filmtropolis",
      imageUrl:
        "https://images.pexels.com/photos/364966/pexels-photo-364966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Film",
      organizerId: 2,
    },
    {
      eventId: 54,
      eventName: "Gaming Tournament",
      description: "Compete in thrilling video game battles",
      date: "2024-03-05",
      time: "14:30:00",
      locationLatitude: 40.7128,
      locationLongitude: -74.006,
      address: "678 Game Street, Gamerville",
      imageUrl:
        "https://images.pexels.com/photos/1417776/pexels-photo-1417776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Gaming",
      organizerId: 3,
    },
    {
      eventId: 55,
      eventName: "Fashion Show",
      description: "Experience the latest trends on the runway",
      date: "2024-04-18",
      time: "20:00:00",
      locationLatitude: 33.4484,
      locationLongitude: -112.074,
      address: "123 Fashion Avenue, Style City",
      imageUrl:
        "https://images.pexels.com/photos/1024890/pexels-photo-1024890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Fashion",
      organizerId: 4,
    },
    {
      eventId: 56,
      eventName: "Literary Symposium",
      description: "A gathering of literary enthusiasts",
      date: "2024-05-22",
      time: "15:45:00",
      locationLatitude: 37.7749,
      locationLongitude: -122.419,
      address: "456 Book Lane, Literatureville",
      imageUrl:
        "https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Literature",
      organizerId: 5,
    },
    {
      eventId: 57,
      eventName: "Environment Cleanup",
      description: "Contribute to a cleaner and greener environment",
      date: "2024-06-08",
      time: "09:00:00",
      locationLatitude: 41.8781,
      locationLongitude: -87.6298,
      address: "789 Eco Street, Greentown",
      imageUrl:
        "https://images.pexels.com/photos/5924887/pexels-photo-5924887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Environment",
      organizerId: 3,
    },
    {
      eventId: 58,
      eventName: "Dance Workshop",
      description: "Learn various dance styles from professionals",
      date: "2024-07-15",
      time: "18:30:00",
      locationLatitude: 34.0522,
      locationLongitude: -118.244,
      address: "234 Dance Avenue, Dancetown",
      imageUrl:
        "https://images.pexels.com/photos/6339/dance-music-concert-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Dance",
      organizerId: 4,
    },
    {
      eventId: 59,
      eventName: "Travel Expo",
      description: "Explore travel destinations and vacation ideas",
      date: "2024-08-20",
      time: "12:30:00",
      locationLatitude: 40.7128,
      locationLongitude: -74.006,
      address: "567 Travel Street, Wanderland",
      imageUrl:
        "https://images.pexels.com/photos/367106/pexels-photo-367106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Travel",
      organizerId: 6,
    },
    {
      eventId: 60,
      eventName: "Pet Adoption Fair",
      description: "Find your new furry friend and support animal welfare",
      date: "2024-09-25",
      time: "10:00:00",
      locationLatitude: 33.4484,
      locationLongitude: -112.074,
      address: "890 Pet Lane, Petville",
      imageUrl:
        "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Pets",
      organizerId: 4,
    },
    {
      eventId: 61,
      eventName: "Yoga Retreat",
      description: "Relax and rejuvenate with a peaceful yoga retreat",
      date: "2024-10-10",
      time: "07:30:00",
      locationLatitude: 37.7749,
      locationLongitude: -122.419,
      address: "123 Serene Street, Yogatown",
      imageUrl:
        "https://images.pexels.com/photos/2294350/pexels-photo-2294350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Wellness",
      organizerId: 2,
    },
    {
      eventId: 62,
      eventName: "Business Networking",
      description: "Connect with professionals in a casual setting",
      date: "2024-11-05",
      time: "17:00:00",
      locationLatitude: 41.8781,
      locationLongitude: -87.6298,
      address: "456 Business Blvd, Bizville",
      imageUrl:
        "https://images.pexels.com/photos/377114/pexels-photo-377114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Business",
      organizerId: 1,
    },
    {
      eventId: 63,
      eventName: "Eiffel Tower Jazz Night",
      description: "Enjoy a night of jazz music near the Eiffel Tower",
      date: "2024-01-30",
      time: "20:00:00",
      locationLatitude: 48.8588,
      locationLongitude: 2.29435,
      address: "1 Jazz Street, Paris",
      imageUrl:
        "https://images.pexels.com/photos/1626480/pexels-photo-1626480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Music",
      organizerId: 2,
    },
    {
      eventId: 64,
      eventName: "French Cuisine Festival",
      description:
        "Savor the flavors of French cuisine with a view of the Eiffel Tower",
      date: "2024-02-15",
      time: "18:30:00",
      locationLatitude: 48.8588,
      locationLongitude: 2.29435,
      address: "2 Gourmet Avenue, Paris",
      imageUrl:
        "https://images.pexels.com/photos/2404920/pexels-photo-2404920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Food",
      organizerId: 3,
    },
    {
      eventId: 65,
      eventName: "Eiffel Tower Sunset Yoga",
      description:
        "Experience yoga with a breathtaking sunset backdrop at the Eiffel Tower",
      date: "2024-03-10",
      time: "17:00:00",
      locationLatitude: 48.8588,
      locationLongitude: 2.29435,
      address: "3 Yoga Lane, Paris",
      imageUrl:
        "https://images.pexels.com/photos/2294351/pexels-photo-2294351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Wellness",
      organizerId: 4,
    },
    {
      eventId: 66,
      eventName: "Art Exhibition: Eiffel Inspirations",
      description: "Explore art inspired by the beauty of the Eiffel Tower",
      date: "2024-04-05",
      time: "10:30:00",
      locationLatitude: 48.8588,
      locationLongitude: 2.29435,
      address: "4 Art Street, Paris",
      imageUrl:
        "https://images.pexels.com/photos/1115227/pexels-photo-1115227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Art",
      organizerId: 5,
    },
  ];

  const randomItems = placesEvents.sort(() => Math.random() - 0.5);
  let selectedElementsRandom = randomItems.slice(0, 8);

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const openModal = (item) => {
    setSelectedGalleryItem(item);
    setModalVisible(true);
    console.log("first ", selectedGalleryItem)
  };
  
  const closeModal = () => {
    setSelectedGalleryItem(null);
    console.log("first ", selectedGalleryItem)
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
            data={foodTypes}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw``}
            renderItem={({ item }) => (
              <Pressable onPress={() => openModal({item})}>
                <RenderStatus item={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
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
            data={foodTypes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <RenderCategories item={item} />}
            keyExtractor={(item) => item.id.toString()}
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
            data={foodTypes}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <RenderCategories item={item} />}
            keyExtractor={(item) => item.id.toString()}
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
                    uri: selectedGalleryItem.imageUrl || "https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

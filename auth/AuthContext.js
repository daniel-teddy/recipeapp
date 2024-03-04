import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
  const [events, setEvents] = useState([]);
  // const [transactions, setTransactions] = useState([]);

  const login = async (email, password) => {
    try {
      if (!email.includes("@")) {
        console.log("Error", "Invalid email address");
        return;
      }

      const response = await fetch("https://k8fs1psz-3001.euw.devtunnels.ms/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const { accessToken, userDetails } = await response.json();

        // Log the token and user details
        // console.log("login Token:", accessToken);
        // console.log("login User Details:", userDetails);

        // Convert the token and user details to JSON strings and store them
        const tokenString = JSON.stringify(accessToken);
        const userDetailsString = JSON.stringify(userDetails);

        await AsyncStorage.setItem("token", tokenString);
        await AsyncStorage.setItem("userDetails", userDetailsString);

        setReloadKey((prevKey) => !prevKey);
      } else {
        const errorData = await response.json();
        console.log("Error", errorData.message);
      }
    } catch (error) {
      console.error(error);
      console.log("Error", "An error occurred while processing your request");
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userDetails");

      setReloadKey((prevKey) => !prevKey);
    } catch (error) {
      console.error(error);
      console.log("Error", "An error occurred while logging out");
    }
  };

  const register = async (firstName, lastName, email, password, userTypeId) => {
    try {
      if (!email.includes("@")) {
        console.log("Error", "Invalid email address");
        return;
      }

      const response = await fetch("https://k8fs1psz-3001.euw.devtunnels.ms/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userTypeId,
        }),
      });

      if (response.ok) {
        // const result = await response.json();
        // console.log("Success", result);

        await login(email, password);
      } else {
        const errorData = await response.json();
        console.log("Error", errorData.message);
      }
    } catch (error) {
      console.error(error);
      console.log("Error", "An error occurred while processing your request");
    }
  };

  const checkIfUserExist = async () => {
    try {
      const res = await AsyncStorage.getItem("token");
      if (res) {
        // console.log("check user exist (token):", res);
        const userDetailsString = await AsyncStorage.getItem("userDetails");
        const userDetails = JSON.parse(userDetailsString);

        setIsUser(true);
        setUserDetails(userDetails);
      } else {
        console.log(" there is no user connected");
        setIsUser(false);
        setUserDetails(null);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    checkIfUserExist();
  }, [reloadKey]);

  const getEvents = async () => {
    try {
      const response = await fetch("https://k8fs1psz-3001.euw.devtunnels.ms/events", {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        const eventsString = JSON.stringify(result);
        await AsyncStorage.setItem("events", eventsString);
        setEvents(result);
      } else {
        const errorData = await response.json();
        console.log("Error", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred while fetching events:", error);
    }
  };

  const getEventsFromStorage = async () => {
    try {
      const eventsString = await AsyncStorage.getItem("events");

      if (eventsString) {
        const eventsData = JSON.parse(eventsString);
        setEvents(eventsData);
      } else {
        // If events do not exist in storage, fetch them
        getEvents();
      }
    } catch (error) {
      console.error("An error occurred while getting events:", error);
    }
  };

  useEffect(() => {
    getEventsFromStorage();
  }, []);  
  
  // const saveTransaction = async (s_transaction) => {
  //   try {
  //     // Retrieve existing transactions from AsyncStorage
  //     const existingTransactions = await AsyncStorage.getItem('transactions');
  //     const transactions = existingTransactions ? JSON.parse(existingTransactions) : [];
  
  //     // Add the new transaction to the array
  //     const updatedTransactions = [...transactions, s_transaction];
  
  //     // Save the updated transactions to AsyncStorage
  //     await AsyncStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  
  //     // Update the state with the new transactions
  //     setTransactions(updatedTransactions);
  //   } catch (error) {
  //     console.error('Error saving transaction:', error);
  //   }
  // };
  
  const createBooking = async ({eventId,
    userId,
    bookingDetails}) => {
      try {
        const response = await fetch("https://k8fs1psz-3001.euw.devtunnels.ms/post-bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId,
          userId,
          bookingDetails
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      // console.log("inserted data res: ", responseData);
      } catch (error) {
        console.log("Error while inserting bookings: ", error);
      }
    }

  return (
    <AuthContext.Provider
      value={{ isUser, login, userDetails, logout, register,  createBooking }}
      // value={{ isUser, login, userDetails, logout, register, transactions, saveTransaction, createBooking }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

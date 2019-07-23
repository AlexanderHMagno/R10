import React from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async (name, value) => {
  try {
    return await AsyncStorage.setItem(name, value);
  } catch (e) {
    console.log(e);
  }
};

export const removeValue = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    return (keys = await AsyncStorage.getAllKeys());
  } catch (e) {
    console.log(e);
  }
};

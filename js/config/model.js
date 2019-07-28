import AsyncStorage from "@react-native-community/async-storage";

export const storeData = async key => {
  try {
    return await AsyncStorage.setItem(key, 1);
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

export const getMultiple = async keys => {
  let values;
  try {
    values = await AsyncStorage.multiGet(keys);
  } catch (e) {}
  return values;
};

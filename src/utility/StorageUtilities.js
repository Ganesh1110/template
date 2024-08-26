import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (error) {
    console.error(`Error storing ${name} in AsyncStorage`, error);
  }
};

const getData = async (name) => {
  try {
    const token = await AsyncStorage.getItem(name);
    return token;
  } catch (error) {
    console.error(`Error getting ${name} from AsyncStorage`, error);
    return null;
  }
};

const removeData = async (name) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (error) {
    console.error(`Error removing ${name} from AsyncStorage`, error);
  }
};

export { storeData, getData, removeData };

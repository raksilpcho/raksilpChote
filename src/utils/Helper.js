import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../navigation/rootNavigation";




export const generateOTP = () => {
  const randomNum = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return randomNum.toString();
};

export const resetAuth = async () => {
  await AsyncStorage.removeItem('@pin')
  await AsyncStorage.removeItem('@token')
  await AsyncStorage.removeItem('@phone')
  RootNavigation.resetStack()
};

export const resetPin = async () => {
  await AsyncStorage.removeItem('@pin')
}

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFirstAccess = async () => {
  const asyncFirstAccess = async () => {
    const firstAccess = await AsyncStorage.getItem("@first_access");
    return firstAccess;
  };
  const getFirstAccess = asyncFirstAccess();

  if ((await getFirstAccess) === null) {
    AsyncStorage.setItem("@first_access", "true");
    return true;
  } else if ((await getFirstAccess) === "false") {
    return false;
  }
};

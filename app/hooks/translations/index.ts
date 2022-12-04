import { I18n } from "i18n-js";
import React, { useState, useEffect } from "react";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translates } from "./translates";

// Set the key-value pairs for the different languages you want to support.
export const useTranslations = () => {
  const [local, setLocal] = useState<string | null>(null);
  const translations = new I18n(translates);

  const locale = async () => {
    const locale = await AsyncStorage.getItem("localization");
    if (!locale) setLocal(Localization.locale);
    else setLocal(local);
  };

  useEffect(() => {
    locale();
  }, []);

  if (local !== null) {
    translations.locale = local;
    return translations;
  }
};

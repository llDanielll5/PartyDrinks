import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_400Regular,
  Raleway_700Bold,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";

export const useLocalFonts = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    const getLocalFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Raleway: Raleway_400Regular,
          RalewayMedium: Raleway_500Medium,
          RalewaySemibold: Raleway_600SemiBold,
          RalewayBold: Raleway_700Bold,
        });
      } catch (error) {
      } finally {
        setAppIsReady(true);
      }
    };
    getLocalFonts();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) SplashScreen.hideAsync();
  }, [appIsReady]);

  return { onLayout, appIsReady };
};

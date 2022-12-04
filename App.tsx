import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";
import Routes from "./app/globals/routes";
import Constants from "expo-constants";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useLocalFonts } from "./app/hooks/useLocalFonts";
import { COLORS } from "./app/globals/constants/colors";

export default function App() {
  const { appIsReady, onLayout } = useLocalFonts();
  const paperTheme = { ...DefaultTheme };

  if (!appIsReady) return null;

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <RecoilRoot>
        <PaperProvider theme={paperTheme}>
          <StatusBar backgroundColor={COLORS.background} style="auto" />
          <View style={{ marginTop: Constants.statusBarHeight }} />
          <Routes />
        </PaperProvider>
      </RecoilRoot>
    </View>
  );
}

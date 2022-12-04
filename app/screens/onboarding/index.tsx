import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OnboardingComponent from "react-native-onboarding-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PagesOnboarding } from "./pages";

const Onboarding = () => {
  const { navigate } = useNavigation();
  const Done = ({ ...props }) => (
    <TouchableOpacity style={styles.doneTouch} {...props}>
      <Text style={{ fontSize: 15, fontWeight: "600" }}>Estou pronto!</Text>
    </TouchableOpacity>
  );

  const Dots = ({ selected }: any) => {
    let backgroundColor;
    let opacity;
    let radius;
    let height;
    let width;
    backgroundColor = selected ? "#222" : "#666";
    opacity = selected ? 1 : 0.2;
    radius = selected ? 40 : 55;
    width = selected ? 14 : 6;
    height = 6;

    return (
      <View style={styles.dots(width, height, backgroundColor, opacity)} />
    );
  };

  async function finishOnboarding() {
    AsyncStorage.setItem("@first_access", "false");
    navigate("HomeScreen");
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image source={require("../../images/herb.png")} style={styles.herbImg} />
      <Image
        source={require("../../images/drink.png")}
        style={styles.drinkImg}
      />

      <OnboardingComponent
        titleStyles={{ fontSize: 27 }}
        containerStyles={{ zIndex: 3 }}
        DoneButtonComponent={Done}
        showNext={false}
        showSkip={false}
        DotComponent={(selected) => Dots(selected)}
        pages={PagesOnboarding}
        transitionAnimationDuration={250}
        onDone={finishOnboarding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dots: (
    width: number,
    height: number,
    backgroundColor: string,
    opacity: number
  ) => ({
    width: width,
    height: height,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: backgroundColor,
    opacity: opacity,
  }),
  doneTouch: {
    backgroundColor: "#fff",
    minWidth: 80,
    paddingHorizontal: 15,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 20,
  },
  onboardingButtonStyle: {
    backgroundColor: "#fff",
    minWidth: 80,
    paddingHorizontal: 15,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight: 20,
  },
  herbImg: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 30,
    right: 0,
    zIndex: 2,
  },
  drinkImg: {
    width: 125,
    height: 55,
    position: "absolute",
    top: 50,
    left: 50,
    zIndex: 2,
  },
});

export default Onboarding;

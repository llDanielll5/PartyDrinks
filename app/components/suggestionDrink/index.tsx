import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { getRandomDrink } from "../../requests";
import { DrinkDetail } from "../../../types";
import { COLORS } from "../../globals/constants/colors";
import { useNavigation } from "@react-navigation/native";

interface SuggestionDrinkProps {}

const SuggestionDrink: React.FC = () => {
  const { navigate } = useNavigation();
  const [drink, setDrink] = useState<DrinkDetail[] | null>([]);
  const gettingRandomDrink = async () => {
    const result = await getRandomDrink();
    setDrink(result);
  };

  useEffect(() => {
    gettingRandomDrink();
  }, []);

  const navigateToDetails = () => {
    navigate("DrinkDetails", { drinkID: drink?.[0]?.idDrink });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={navigateToDetails}
    >
      <Text style={styles.textDrink}>{drink?.[0]?.strDrink}</Text>
      <Image
        source={{ uri: drink?.[0]?.strDrinkThumb }}
        style={styles.imgDrink}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "100%",
    height: 240,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: COLORS.background,
    borderColor: "#f5f5f5",
  },
  backgroundImg: {
    width: "100%",
    height: 230,
    opacity: 0.1,
    borderRadius: 12,
    position: "absolute",
  },
  textDrink: {
    fontFamily: "RalewaySemibold",
    textAlign: "center",
    paddingBottom: 8,
    fontSize: 22,
    color: COLORS.primary,
  },
  imgDrink: {
    width: "95%",
    height: 180,
    alignSelf: "center",
    borderRadius: 12,
  },
});

export default SuggestionDrink;

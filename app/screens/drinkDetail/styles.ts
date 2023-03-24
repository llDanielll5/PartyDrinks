import { StyleSheet } from "react-native";
import { COLORS } from "../../globals/constants/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  textInstructions: {
    textAlign: "center",
    paddingHorizontal: 8,
    fontFamily: "Raleway",
    fontSize: 18,
    marginVertical: 12,
  },
  imgDrink: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginVertical: 12,
  },
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientsText: {
    fontFamily: "RalewaySemibold",
    fontSize: 20,
    color: COLORS.primary,
  },
  backDetailsImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default styles;

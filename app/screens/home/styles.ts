import { StyleSheet } from "react-native";
import { COLORS } from "../../globals/constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  wantLearn: {
    fontFamily: "RalewaySemibold",
    fontSize: 24,
    marginTop: 24,
  },
  input: {
    height: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: "white",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  drinkImg: {
    width: 400,
    height: 600,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  optionsMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    width: "100%",
  },
  seeAllContainer: {
    borderWidth: 1,
    borderColor: COLORS.pink,
    borderRadius: 8,
    padding: 6,
  },
  seeAll: {
    fontFamily: "RalewaySemibold",
    fontSize: 12,
    color: COLORS.pink,
  },
  footer: {
    textAlign: "center",
    fontFamily: "RalewaySemibold",
    fontSize: 16,
  },
  rights: {
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: 14,
  },
  h2: {
    fontFamily: "RalewaySemibold",
    fontSize: 18,
    marginVertical: 12,
  },
  suggestion: {
    fontFamily: "RalewaySemibold",
    fontSize: 18,
    marginVertical: 12,
  },
});

export default styles;

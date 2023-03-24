import { StyleSheet } from "react-native";
import { COLORS } from "../../globals/constants/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: COLORS.background,
    height: "100%",
  },
  drinkDetailContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: COLORS.orange,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2.41,
    elevation: 3,
    marginVertical: 8,
    marginHorizontal: 12,
    marginTop: 4,
  },
  imgDrink: {
    alignSelf: "center",
    width: "100%",
    height: 220,
    borderRadius: 12,
  },
  drinkNameContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 2,
    justifyContent: "center",
    borderRadius: 8,
  },
  drinkName: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  flatlist: {
    marginHorizontal: -12,
    marginBottom: "20%",
  },
});

export default styles;

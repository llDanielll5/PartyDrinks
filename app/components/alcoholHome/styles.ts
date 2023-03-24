import { StyleSheet } from "react-native";
import { COLORS } from "../../globals/constants/colors";

const styles = StyleSheet.create({
  touch: {
    height: 110,
    width: 110,
    borderRadius: 16,
    backgroundColor: COLORS.pink,
    marginRight: 16,
  },
  text: {
    textAlign: "center",
    fontFamily: "RalewaySemibold",
    color: "white",
    fontSize: 14,
    marginTop: 8,
  },
  img: {
    width: "45%",
    height: "50%",
    borderRadius: 12,
    marginTop: 8,
    alignSelf: "center",
  },
});

export default styles;

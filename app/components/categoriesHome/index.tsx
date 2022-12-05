import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS } from "../../globals/constants/colors";
import { useTranslations } from "../../hooks/translations";

interface CategoriesHomeProps {
  item: any;
  index: number;
}

const CategoriesHome: React.FC<CategoriesHomeProps> = (props) => {
  const { item, index } = props;
  const translate = useTranslations();

  const switchImagesByIndex = (index: number) => {
    switch (index) {
      case 0:
        return require("../../images/categories/ordinary.png");
      case 1:
        return {
          uri: "https://cdn.pixabay.com/photo/2014/12/21/23/36/cocktail-575631_960_720.png",
        };
      case 2:
        return {
          uri: "https://cdn.pixabay.com/photo/2021/04/25/02/43/milk-shake-6205399_960_720.png",
        };
      case 3:
        return {
          uri: "https://cdn.pixabay.com/photo/2017/02/01/10/24/pop-2029452_960_720.png",
        };
      case 4:
        return {
          uri: "https://cdn.pixabay.com/photo/2014/12/21/23/56/hot-chocolate-576418_960_720.png",
        };
      case 5:
        return {
          uri: "https://cdn.pixabay.com/photo/2018/08/01/22/41/graphic-3578418_960_720.png",
        };
      case 6:
        return {
          uri: "https://cdn.pixabay.com/photo/2017/03/01/22/14/coffee-2109782_960_720.png",
        };
      case 7:
        return require("../../images/categories/liqueur.png");
      case 8:
        return require("../../images/categories/party.png");
      case 9:
        return {
          uri: "https://cdn.pixabay.com/photo/2017/11/15/12/56/beer-2951894_960_720.png",
        };
      case 10:
        return {
          uri: "https://cdn.pixabay.com/photo/2012/04/26/14/06/juice-42560_960_720.png",
        };
      default:
        return { uri: "" };
    }
  };
  const switchCategoriesTranslate = (index: number) => {
    switch (index) {
      case 0:
        return translate?.t("categories.ordinaryDrink");
      case 1:
        return translate?.t("categories.cocktail");
      case 2:
        return translate?.t("categories.shake");
      case 3:
        return translate?.t("categories.other");
      case 4:
        return translate?.t("categories.cocoa");
      case 5:
        return translate?.t("categories.shot");
      case 6:
        return translate?.t("categories.coffe");
      case 7:
        return translate?.t("categories.homemadeLiqueur");
      case 8:
        return translate?.t("categories.party");
      case 9:
        return translate?.t("categories.beer");
      case 10:
        return translate?.t("categories.softDrink");
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.cardContainer}>
      <Image
        source={switchImagesByIndex(index)}
        style={styles.img}
        resizeMode={"contain"}
      />
      <Text style={styles.categorie}>{switchCategoriesTranslate(index)}</Text>
      {/* <Text>tantos mix</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 86,
    height: 112,
    backgroundColor: COLORS.background,
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  categorie: {
    fontFamily: "RalewaySemibold",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 4,
    color: COLORS.pink,
  },
  img: {
    marginTop: 8,
    width: 55,
    height: 55,
    borderRadius: 30,
  },
});

export default CategoriesHome;

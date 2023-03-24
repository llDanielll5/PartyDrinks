import React from "react";
import styles from "./styles";
import { Image, Text, TouchableOpacity } from "react-native";
import { useTranslations } from "../../hooks/translations";
import { useNavigation } from "@react-navigation/native";

export interface ItemProps {
  item: any;
  index: number;
}

const AlcoholHome: React.FC<ItemProps> = (props) => {
  const { item, index } = props;
  const { navigate } = useNavigation();
  const translate = useTranslations();
  const parseText = (index: number) => {
    switch (index) {
      case 0:
        return translate?.t("alcoholics.alcohol");
      case 1:
        return translate?.t("alcoholics.nonAlcohol");
      case 2:
        return;
    }
  };
  const parseImg = (index: number) => {
    switch (index) {
      case 0:
        return {
          uri: "https://cdn.pixabay.com/photo/2013/07/12/19/19/martini-154548_960_720.png",
        };
      case 1:
        return {
          uri: "https://cdn.pixabay.com/photo/2014/12/21/23/56/juice-576401_960_720.png",
        };
      case 2:
        return;
    }
  };

  const handlePressAlcohol = () => {
    navigate("CategoryAlcoholFilter", {
      alcoholName: index === 1 ? "Alcoholic" : "Non_Alcoholic",
      namePT: parseText(index),
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.touch}
      onPress={handlePressAlcohol}
    >
      <Text style={styles.text}>{parseText(index)}</Text>
      <Image
        source={parseImg(index)}
        style={styles.img}
        resizeMode={"stretch"}
      />
    </TouchableOpacity>
  );
};

export default AlcoholHome;

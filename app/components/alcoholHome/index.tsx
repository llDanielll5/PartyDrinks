import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../globals/constants/colors";
import { useTranslations } from "../../hooks/translations";

export interface ItemProps {
  item: any;
  index: number;
}

const AlcoholHome: React.FC<ItemProps> = (props) => {
  const { item, index } = props;
  const translate = useTranslations();
  const parseText = (index: number) => {
    switch (index) {
      case 0:
        return translate?.t("alcoholics.alcohol");
      case 1:
        return translate?.t("alcoholics.nonAlcohol");
      case 2:
        return translate?.t("alcoholics.optional");
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
        return {
          uri: "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
        };
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        height: 240,
        width: 180,
        borderRadius: 16,
        backgroundColor: COLORS.pink,
        marginRight: 16,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "RalewaySemibold",
          color: "white",
          fontSize: 24,
          marginTop: 8,
        }}
      >
        {parseText(index)}
      </Text>
      <Image
        source={parseImg(index)}
        style={{
          width: 150,
          height: 180,
          borderRadius: 12,
          marginTop: 8,
          alignSelf: "center",
        }}
        resizeMode={"stretch"}
      />
    </TouchableOpacity>
  );
};

export default AlcoholHome;

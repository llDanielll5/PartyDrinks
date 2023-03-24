import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../globals/constants/colors";
import { useTranslations } from "../../hooks/translations";
import {
  switchAlcoholTranslate,
  switchCategoriesTranslate,
} from "../../services/switchCategoriesTranslate";

interface DestaksProps {
  category: string;
  alcohol: string;
  glass: string;
}

const DestaksComponent: React.FC<DestaksProps> = (props) => {
  const { alcohol, category, glass } = props;
  const tr = useTranslations();
  return (
    <View style={styles.destaks}>
      <View style={styles.firstContent}>
        <Text style={styles.firstText}>{tr?.t("categorie")}</Text>
        <Text style={styles.destakFirst}>
          {switchCategoriesTranslate(category)}
        </Text>
      </View>
      <View style={styles.middleContent}>
        <Text style={styles.secondText}>{tr?.t("alcoholic")}</Text>
        <Text style={styles.destakSecond}>
          {switchAlcoholTranslate(alcohol)}
        </Text>
      </View>
      <View style={styles.lastContent}>
        <Text style={styles.thirdText}>{tr?.t("glassUsed")}</Text>
        <Text style={styles.destakThird}>{glass}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  destaks: {
    paddingHorizontal: 8,
  },
  destakFirst: {
    color: COLORS.pink,
    fontFamily: "RalewayBold",
    fontSize: 24,
    lineHeight: 23,
  },
  firstContent: {
    alignSelf: "flex-start",
    marginVertical: 6,
  },
  middleContent: {
    alignSelf: "center",
    marginVertical: 6,
  },
  destakSecond: {
    color: COLORS.green,
    fontFamily: "RalewayBold",
    fontSize: 24,
    lineHeight: 25,
  },
  lastContent: {
    alignSelf: "flex-end",
    marginVertical: 6,
  },
  destakThird: {
    color: COLORS.orange,
    fontFamily: "RalewayBold",
    fontSize: 24,
    lineHeight: 23,
  },
  firstText: {
    fontFamily: "Raleway",
    fontSize: 14,
    color: COLORS.pink,
    marginBottom: 2,
  },
  secondText: {
    fontFamily: "Raleway",
    fontSize: 14,
    color: COLORS.green,
    marginBottom: 2,
  },
  thirdText: {
    fontFamily: "Raleway",
    fontSize: 14,
    color: COLORS.orange,
    marginBottom: 2,
  },
});

export default DestaksComponent;

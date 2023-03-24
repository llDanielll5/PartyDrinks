import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { getIngredientsOfDrink } from "../../services/getIngredientsOfDrink";
import { useTranslations } from "../../hooks/translations";
import { useNavigation } from "@react-navigation/native";
import { getDrinkByID } from "../../requests";
import { DrinkDetail } from "../../../types";
import { IconButton } from "react-native-paper";
import { translate } from "@vitalets/google-translate-api";
import { COLORS } from "../../globals/constants/colors";
import Loading from "../../components/loading/indes";
import IngredientsComponent from "./ingredients";
import DestaksComponent from "./destaks";
import Nav from "../../components/nav";
import styles from "./styles";
import { translateText } from "../../services/translateWord";

const DrinkDetails = ({ navigation, route }: any) => {
  const tr = useTranslations();
  const { goBack } = useNavigation();
  const [drink, setDrink] = useState<DrinkDetail>();
  const [loading, setLoading] = useState<boolean>();
  const [instructions, setInstructions] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const id = route?.params?.drinkID;

  async function getDrink() {
    setLoading(true);
    const result: DrinkDetail = await getDrinkByID(id);
    const ing = getIngredientsOfDrink(result);
    setDrink(result);
    // translateWord(result?.strInstructions);
    const res = await translateText(result?.strInstructions);
    console.log(res);
    setInstructions(res);
    setIngredients(ing);
    setLoading(false);
  }

  useEffect(() => {
    getDrink();
  }, []);

  if (loading)
    return (
      <ScrollView style={{ backgroundColor: COLORS.background }}>
        <Loading style={{ height: 50, marginTop: 100 }} size={50} isLoading />
      </ScrollView>
    );
  return (
    <>
      <Nav
        leftContent={{ icon: "arrow-left", onPress: goBack }}
        middleContent={{ title: drink?.strDrink }}
        rightContent={{ icon: "heart-outline" }}
      />
      <ScrollView
        style={{ backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../images/details.png")}
          style={styles.backDetailsImage}
        />
        <View style={styles.container}>
          <Image
            source={{ uri: drink?.strDrinkThumb ?? "" }}
            style={styles.imgDrink}
            resizeMode={"cover"}
          />
          <DestaksComponent
            alcohol={drink?.strAlcoholic}
            category={drink?.strCategory}
            glass={drink?.strGlass}
          />

          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientsText}>{tr?.t("ingredients")}</Text>
            <IconButton
              icon={"chevron-right"}
              size={30}
              color={COLORS.primary}
              style={{ margin: 0, marginTop: 5 }}
            />
          </View>

          <IngredientsComponent ingredients={ingredients} />
          <Text style={styles.textInstructions}>{instructions}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DrinkDetails;

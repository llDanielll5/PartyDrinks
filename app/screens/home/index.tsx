import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useRecoilValue } from "recoil";
import { useTranslations } from "../../hooks/translations";
import {
  getAlcoholOfDrinks,
  getCategoriesOfDrinks,
  getDrinksFilterByName,
} from "../../requests";
import AuthStatus from "../../globals/atoms/auth";
import UserData from "../../globals/atoms/user";
import CategoriesHome from "../../components/categoriesHome";
import AlcoholHome from "../../components/alcoholHome";
import SuggestionDrink from "../../components/suggestionDrink";
import Nav from "../../components/nav";
import styles from "./styles";

const HomeScreen = ({ navigation }: any) => {
  const { navigate } = navigation;
  const translate = useTranslations();
  const { userImage } = useRecoilValue(UserData);
  const { isAuthenticated } = useRecoilValue(AuthStatus);
  const [inputFilter, setInputFilter] = useState<string>("");
  const [inputValues, setInputValues] = useState([]);
  const [categories, setCategories] = useState([]);
  const [alcohols, setAlcohols] = useState([]);
  const userImg = isAuthenticated
    ? userImage
    : "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_960_720.png";

  async function getDrinksCategories() {
    const res = await getCategoriesOfDrinks();
    const alc = await getAlcoholOfDrinks();
    setCategories(res);
    setAlcohols(alc);
  }

  async function onGetFilterDrink(search: string) {
    const drinks = await getDrinksFilterByName(search);
    setInputValues(drinks);
  }

  // function selectedDrink(newValue) {
  //   console.log(newValue);
  //   // navigate('DrinkDetails', {})
  // }

  useEffect(() => {
    getDrinksCategories();
  }, []);

  const renderCategories = ({ item, index }: any) => (
    <CategoriesHome item={item} index={index} />
  );
  const renderAlcohols = ({ item, index }: any) => {
    if (index !== alcohols.length - 1) {
      return <AlcoholHome item={item} index={index} />;
    }
  };
  const OptionMenu = (props: any) => (
    <View style={styles.optionsMenu}>
      <Text style={{ fontFamily: "RalewaySemibold", fontSize: 18 }}>
        {props.category}
      </Text>
    </View>
  );

  return (
    <>
      <StatusBar backgroundColor={"white"} style="auto" />
      <Nav
        // leftContent={{ icon: "menu-open", onPress: () => {} }}
        middleContent={{ logo: require("../../../assets/drinkkingText.png") }}
        // rightContent={{ userImage: userImg, onPress: () => {} }}
        backgroundColor={"white"}
      />
      <ScrollView style={{ backgroundColor: "white", paddingBottom: 500 }}>
        <View style={styles.container}>
          <Text style={styles.wantLearn}>{translate?.t("wantLearn")}</Text>

          <OptionMenu category={translate?.t("categorie")} />
          <FlatList
            horizontal
            data={categories}
            extraData={categories}
            style={{ marginRight: -32, marginLeft: -12 }}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.h2}>{translate?.t("alcohol")}</Text>
          <FlatList
            horizontal
            data={alcohols}
            extraData={alcohols}
            renderItem={renderAlcohols}
            style={{ marginRight: -32 }}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.suggestion}>
            {translate?.t("suggestionDrink")}
          </Text>
          <SuggestionDrink />
        </View>

        <View style={{ marginVertical: 24 }}>
          <Text style={styles.footer}>{translate?.t("developed")}</Text>
          <Text style={styles.rights}>{translate?.t("allRights")}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

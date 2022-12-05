import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Nav from "../../components/nav";
import AuthStatus from "../../globals/atoms/auth";
import { useRecoilValue } from "recoil";
import UserData from "../../globals/atoms/user";
import { StatusBar } from "expo-status-bar";
import { useTranslations } from "../../hooks/translations";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import CategoriesHome from "../../components/categoriesHome";
import { getAlcoholOfDrinks, getCategoriesOfDrinks } from "../../requests";
import AlcoholHome from "../../components/alcoholHome";

const HomeScreen = () => {
  const translate = useTranslations();
  const { userImage } = useRecoilValue(UserData);
  const { isAuthenticated } = useRecoilValue(AuthStatus);
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

  useEffect(() => {
    getDrinksCategories();
  }, []);

  const renderCategories = ({ item, index }: any) => (
    <CategoriesHome item={item} index={index} />
  );
  const renderAlcohols = ({ item, index }: any) => (
    <AlcoholHome item={item} index={index} />
  );
  const OptionMenu = (props: any) => (
    <View style={styles.optionsMenu}>
      <Text style={{ fontFamily: "RalewaySemibold", fontSize: 18 }}>
        {props.category}
      </Text>
      <TouchableOpacity style={styles.seeAllContainer}>
        <Text style={styles.seeAll}>{translate?.t("seeAll")}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <StatusBar backgroundColor={"white"} style="auto" />
      <Nav
        leftContent={{ icon: "menu-open", onPress: () => {} }}
        middleContent={{ title: translate?.t("appName") }}
        rightContent={{ userImage: userImg, onPress: () => {} }}
        backgroundColor={"white"}
      />
      <ScrollView style={{ backgroundColor: "white", paddingBottom: 500 }}>
        <View style={styles.container}>
          <Text style={styles.wantLearn}>{translate?.t("wantLearn")}</Text>
          <TextInput
            mode={"flat"}
            underlineColor={"transparent"}
            activeUnderlineColor={"transparent"}
            style={styles.input}
            placeholder={translate?.t("search")}
            placeholderTextColor={"rgb(200,200,200)"}
            right={
              <TextInput.Icon
                icon={"magnify"}
                color={"rgb(200,200,200)"}
                forceTextInputFocus={false}
                onPress={() => alert("magnify")}
              />
            }
          />

          <OptionMenu category={translate?.t("categorie")} />
          <FlatList
            data={categories}
            extraData={categories}
            renderItem={renderCategories}
            horizontal
            style={{ marginRight: -32 }}
            showsHorizontalScrollIndicator={false}
          />

          <Text
            style={{
              fontFamily: "RalewaySemibold",
              fontSize: 18,
              marginVertical: 12,
            }}
          >
            {translate?.t("alcohol")}
          </Text>
          <FlatList
            data={alcohols}
            extraData={alcohols}
            renderItem={renderAlcohols}
            horizontal
            style={{ marginRight: -32 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.footer}>{translate?.t("developed")}</Text>
          <Text style={styles.rights}>{translate?.t("allRights")}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

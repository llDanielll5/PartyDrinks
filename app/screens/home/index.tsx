import React from "react";
import { ScrollView, Text, View } from "react-native";
import Nav from "../../components/nav";
import AuthStatus from "../../globals/atoms/auth";
import { useRecoilValue } from "recoil";
import UserData from "../../globals/atoms/user";
import { StatusBar } from "expo-status-bar";
import { useTranslations } from "../../hooks/translations";
import { TextInput } from "react-native-paper";
import styles from "./styles";

const HomeScreen = () => {
  const translate = useTranslations();
  const { userImage } = useRecoilValue(UserData);
  const { isAuthenticated } = useRecoilValue(AuthStatus);
  const userImg = isAuthenticated
    ? userImage
    : "https://cdn.pixabay.com/photo/2013/07/13/10/44/man-157699_960_720.png";
  return (
    <>
      <StatusBar backgroundColor={"white"} style="auto" />
      <Nav
        leftContent={{ icon: "menu-open", onPress: () => {} }}
        middleContent={{ title: translate?.t("appName") }}
        rightContent={{ userImage: userImg, onPress: () => {} }}
        backgroundColor={"white"}
      />
      <ScrollView style={{ backgroundColor: "white" }}>
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
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

import * as React from "react";
import { Dimensions, Image } from "react-native";
import { COLORS } from "../../globals/constants/colors";

const { height } = Dimensions.get("window");

export const PagesOnboarding = [
  {
    backgroundColor: COLORS.background,
    image: (
      <Image
        style={{ width: "100%", height: 250 }}
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/01/18/11/53/cocktails-6946870_960_720.png",
        }}
      />
    ),
    title: "Bem vindo ao Party Drinks",
    subtitle:
      "O Party Drinks foi criado para te trazer todas receitas de coquetéis existentes!",
  },
  {
    backgroundColor: COLORS.background,
    image: (
      <Image
        style={{ width: "100%", height: height / 2 - 10 }}
        source={{
          uri: "https://cdn.pixabay.com/photo/2019/07/12/11/26/cups-4332637_960_720.png",
        }}
      />
    ),
    title: "Drinks na palma de sua mão",
    subtitle: "Venha conhecer a plataforma de Drinks mais completa!",
  },
];

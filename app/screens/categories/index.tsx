import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../../globals/constants/colors";
import { getDrinkByCategory } from "../../requests";
import Nav from "../../components/nav";
import styles from "./styles";

interface DrinkByCategoryFilterProps {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

const CategoriesFiltered = () => {
  const route = useRoute();
  const { goBack, navigate } = useNavigation();
  const [data, setData] = React.useState<DrinkByCategoryFilterProps[] | []>([]);
  const categoryName = route?.params?.categoryName;
  const namePT = route?.params?.namePT;

  const getAllFilteredDrinks = async () => {
    const result = await getDrinkByCategory(categoryName);
    setData(result);
  };

  React.useEffect(() => {
    getAllFilteredDrinks();
  }, []);

  const navigateToDetails = (id: string) => {
    navigate("DrinkDetails", { drinkID: id });
  };

  const renderDrinks = ({ item, index }: any) => (
    <TouchableOpacity
      style={styles.drinkDetailContainer}
      activeOpacity={0.5}
      onPress={() => navigateToDetails(item?.idDrink)}
    >
      <View style={styles.drinkNameContainer}>
        <Text style={styles.drinkName}>{item?.strDrink}</Text>
      </View>
      <Image
        source={{ uri: item?.strDrinkThumb }}
        style={styles.imgDrink}
        resizeMode={"cover"}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <Nav
        leftContent={{ icon: "arrow-left", onPress: goBack }}
        middleContent={{ title: namePT }}
        backgroundColor={COLORS.background}
      />

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderDrinks}
          style={styles.flatlist}
        />
      </View>
    </>
  );
};

export default CategoriesFiltered;

import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { COLORS } from "../../globals/constants/colors";

interface IngredientsProps {
  ingredients: string[];
}

const IngredientsComponent: React.FC<IngredientsProps> = (props) => {
  const { ingredients } = props;

  const renderItem = ({ item, index }: any) => (
    <View style={{ flexDirection: "row", alignItems: "center", width: "50%" }}>
      <IconButton
        icon={"glass-cocktail"}
        size={18}
        color={COLORS.primary}
        style={{ margin: 0 }}
      />
      <Text style={styles.textItem}>{item}</Text>
    </View>
  );
  return (
    <FlatList
      data={ingredients}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item}${index}`}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  textItem: {
    marginLeft: 8,
    fontFamily: "Raleway",
    fontSize: 18,
    lineHeight: 20,
    width: "85%",
    textTransform: "capitalize",
  },
});

export default IngredientsComponent;

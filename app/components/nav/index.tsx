import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { COLORS } from "../../globals/constants/colors";

interface NavProps {
  leftContent?: LeftProps;
  middleContent?: MiddleProps;
  rightContent?: RightProps;
  backgroundColor?: string;
}

interface LeftProps {
  icon: string;
  onPress: () => void;
}
interface MiddleProps {
  logo?: any;
  title?: string;
}
interface RightProps {
  userImage?: string;
  icon?: string;
  onPress?: () => void;
}

const Nav: React.FC<NavProps> = (props) => {
  const { leftContent, middleContent, rightContent, backgroundColor } = props;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? COLORS.background },
      ]}
    >
      <IconButton
        icon={leftContent?.icon}
        onPress={leftContent?.onPress}
        size={30}
        rippleColor={COLORS.background}
      />
      {middleContent?.logo ? (
        <Image
          source={middleContent?.logo}
          style={{ width: "50%", height: 55 }}
          resizeMode={"center"}
        />
      ) : (
        <Text style={styles.middleText}>{middleContent?.title}</Text>
      )}
      {rightContent?.userImage ? (
        <TouchableOpacity activeOpacity={0.5} onPress={rightContent?.onPress}>
          <Image
            source={{ uri: rightContent?.userImage }}
            style={{ width: 30, height: 30, borderRadius: 40 }}
          />
        </TouchableOpacity>
      ) : (
        <IconButton
          icon={rightContent?.icon}
          onPress={rightContent?.onPress}
          size={30}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  middleText: {
    fontFamily: "RalewaySemibold",
    fontSize: 26,
    width: "70%",
    textAlign: "center",
  },
});

export default Nav;

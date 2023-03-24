import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { COLORS } from "../../globals/constants/colors";

type PropType = {
  isLoading: boolean;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const Loading = ({ isLoading, color, size, style }: PropType) => (
  <View
    style={[
      {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      style,
    ]}
  >
    <ActivityIndicator
      animating={isLoading}
      color={color ?? COLORS.black}
      size={size ?? 30}
    />
  </View>
);
export default Loading;

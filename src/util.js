import { Dimensions, PixelRatio, Platform } from "react-native";

let screenWidth = Dimensions.get("window").width;

const scale = screenWidth / 320;

export const normalize = size => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

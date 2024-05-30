import React from "react";
import { StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Button } from "react-native-paper";

interface ButtonComponentProps {
  name: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  mode?: "text" | "outlined" | "contained";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  name,
  onPress,
  buttonStyle,
  textStyle,
  mode,
}) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      labelStyle={textStyle}
    >
      {name}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 0,
    width: 344,
    height: 50,
    backgroundColor: "#F00A6C",
  },
});

export default ButtonComponent;

// import React from "react";
// import { StyleSheet } from "react-native";
// import { Button } from "react-native-paper";

// const ButtonComponent = () => {
//   return (
//     <Button
//       mode="contained"
//       buttonColor="#F00A6C"
//       style={styles.button}
//       onPress={() => console.log("Button Pressed")}
//     >
//       BOOK NOW
//     </Button>
//   );
// };

// export default ButtonComponent;

// const styles = StyleSheet.create({
//   button: {
//     marginLeft: 20,
//     width: 344,
//     height: 50,
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//   },
// });

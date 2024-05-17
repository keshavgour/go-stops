import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const ButtonComponent = () => {
  return (
    <Button mode="contained" buttonColor="#F00A6C" style={styles.button}>
      BOOK NOW
    </Button>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    marginLeft: 20,
    width: 344,
    height: 40,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

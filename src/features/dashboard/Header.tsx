import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface HeaderProps {
  logo: string; // Path to your logo image
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Align logo to the right
    paddingHorizontal: 20,
    height: 80,
    paddingTop: 20,
    backgroundColor: "#fff", // Example background color
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
});

export default Header;

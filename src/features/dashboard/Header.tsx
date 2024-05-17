import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { styleHeader } from "../../style/styleHeader";
interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <View style={styleHeader.container}>
      <Image source={{ uri: logo }} style={styleHeader.logo} />
    </View>
  );
};

export default Header;

import React from "react";
import { Text, View } from "react-native";
import FamousPoints from "./FamousPoints";
import { styleReadMore } from "../../style/styleReadMore";
import { famousPointsData } from "../../famousPointsData";

export const ReadMore = () => {
  return (
    <View style={styleReadMore.containers}>
      <Text style={styleReadMore.heading}>REASONS TO VISIT GOA</Text>
      <FamousPoints famousPointsData={famousPointsData} />
    </View>
  );
};

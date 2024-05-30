import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { styleFamousPoints } from "../../style/styleFamousPoints";
import { FamousPointsItem } from "../../interfaces/interfaceDisplay";

interface FamousPointProps {
  famousPointsData: FamousPointsItem[];
}

const FamousPoints: React.FC<FamousPointProps> = ({ famousPointsData }) => {
  return (
    <ScrollView horizontal={true} style={styleFamousPoints.container}>
      {famousPointsData.map((item) => (
        <View key={item.id}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styleFamousPoints.image}
          ></Image>
          <View>
            <Text style={styleFamousPoints.heading}>{item.pointName}</Text>
            <Text style={styleFamousPoints.description}>
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default FamousPoints;

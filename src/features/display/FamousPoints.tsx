import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { FamousPointsItem } from "../../interfaces/interfaceDashboard";
import { styleDestinationDetails } from "../../style/styleDestinationDetails";
import { styleFamousPoints } from "../../style/styleFamousPoints";

interface FamousPointProps {
  famousPointsData: FamousPointsItem[];
}

const FamousPoints: React.FC<FamousPointProps> = ({ famousPointsData }) => {
  return (
    <ScrollView horizontal={true}>
      {famousPointsData.map((item) => (
        <View key={item.id}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styleFamousPoints.image}
          ></Image>
          <View>
            <Text>{item.pointName}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default FamousPoints;

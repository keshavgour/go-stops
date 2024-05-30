import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styleFamousPoints } from "../../style/styleFamousPoints";
import { LocalExperiencesItem } from "../../interfaces/interfaceDisplay";

interface LocalExperiencesProps {
  localExperiencesData: LocalExperiencesItem[];
}

const LocalExperiences: React.FC<LocalExperiencesProps> = ({
  localExperiencesData,
}) => {
  return (
    <View style={{ paddingLeft: 20, paddingTop: 30 }}>
      <Text style={styleFamousPoints.heading}>LOCAL EXPERIENCES AT GOA</Text>
      <ScrollView horizontal={true} style={styleFamousPoints.container}>
        {localExperiencesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => console.log("Local Experiences Clicked")}
          >
            <View key={item.id}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styleFamousPoints.image}
              ></Image>
              <View>
                <Text style={styleFamousPoints.heading}>{item.tourName}</Text>
                <Text style={styleFamousPoints.description}>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LocalExperiences;

import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styleDestination } from "../../style/styleDestination";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { DestinationItem } from "../../interfaces/interfaceDashboard";

interface DestinationProps {
  destinationData: DestinationItem[];
}

type DestinationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

const Destination: React.FC<DestinationProps> = ({ destinationData }) => {
  const navigation = useNavigation<DestinationScreenNavigationProp>();

  const navigateToDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View>
          <Text style={styleDestination.text}>DESTINATIONS</Text>
        </View>
        <View>
          <Text style={styleDestination.textSeeAll}>SEE All</Text>
        </View>
      </View>
      <ScrollView horizontal={true} style={styleDestination.container}>
        {destinationData.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => navigateToDetails()}>
            <View style={styleDestination.slide}>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={styleDestination.image}
              >
                <View style={styleDestination.overlay}>
                  <Text style={styleDestination.city}>{item.city}</Text>
                  <Text style={styleDestination.places}>{item.places}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Destination;

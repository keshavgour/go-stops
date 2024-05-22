import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { styleImageSlider } from "../../style/styleImageSlider";
import { SliderItem } from "../../interfaces/interfaceDashboard";

interface ImageSliderProps {
  sliderItems: SliderItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ sliderItems }) => {
  return (
    <View>
      <ScrollView horizontal={true} style={styleImageSlider.container}>
        {sliderItems.map((item) => (
          <View key={item.id} style={styleImageSlider.slide}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styleImageSlider.image}
            >
              <View style={styleImageSlider.overlay}>
                <Text style={styleImageSlider.city}>{item.city}</Text>
                <Text style={styleImageSlider.place}>{item.place}</Text>
                <Text style={styleImageSlider.availableDate}>
                  From {item.availableDate}
                </Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
      <View style={styleImageSlider.commonPlace}>
        <Text style={styleImageSlider.commonPlaceText}>HOSTELS</Text>
      </View>
    </View>
  );
};

export default ImageSlider;

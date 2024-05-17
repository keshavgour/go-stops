import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";

interface SliderItem {
  imageUrl: string;
  city: string;
  place: string;
  availableDate: string;
}

interface ImageSliderProps {
  sliderItems: SliderItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ sliderItems }) => {
  return (
    <View>
      <ScrollView horizontal={true} style={styles.container}>
        {sliderItems.map((item, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.image}
            >
              <View style={styles.overlay}>
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.availableDate}>
                  From {item.availableDate}
                </Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
      <View style={styles.commonPlace}>
        <Text style={styles.commonPlaceText}>HOSTELS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  slide: {
    marginRight: 1,
  },
  image: {
    width: 167,
    height: 280,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "Black",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
  },
  city: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  place: {
    fontSize: 11,
    color: "#FFBF00",
  },
  availableDate: {
    fontSize: 12,
    color: "white",
  },
  commonPlace: {
    backgroundColor: "#FFBF00",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  commonPlaceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImageSlider;

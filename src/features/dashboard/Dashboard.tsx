import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import BookHostel from "./BookHostel";
import ButtonComponent from "../../components/ButtonComponent";
import { sliderItems } from "../../ImageSliderData";
import Destination from "./Destination";
import { destinationData } from "../../destinationData";
import { styleButton } from "../../style/styleButton";

const Dashboard = () => {
  return (
    <View>
      <ScrollView>
        <Header logo="https://gostops.com/blog/wp-content/uploads/2020/07/hand-with-gostop-log.png" />
        <ImageSlider sliderItems={sliderItems} />
        <BookHostel />
        <ButtonComponent
          name="BOOK NOW"
          onPress={() => console.log("Pressed")}
          buttonStyle={styleButton.dashboardButton}
          textStyle={styleButton.buttonText}
          mode="contained"
        />
        <Destination destinationData={destinationData} />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

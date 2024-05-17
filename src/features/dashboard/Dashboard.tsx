import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import BookHostel from "./BookHostel";
import ButtonComponent from "../../components/ButtonComponent";
import { sliderItems } from "../../ImageSliderData";

const Dashboard = () => {
  return (
    <View>
      <Header logo="https://gostops.com/blog/wp-content/uploads/2020/07/hand-with-gostop-log.png" />
      <ImageSlider sliderItems={sliderItems} />
      <BookHostel />
      <ButtonComponent />
    </View>
  );
};

export default Dashboard;

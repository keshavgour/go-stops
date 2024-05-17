import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import BookHostel from "./BookHostel";
import ButtonComponent from "../../components/ButtonComponent";

const Dashboard = () => {
  const sliderItems = [
    {
      imageUrl: "https://img.lovepik.com/photo/48013/0603.jpg_wh860.jpg",
      city: "McLeodGanj",
      place: "@Bhagsu",
      availableDate: "1st May 2024",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
      city: "Gurugram",
      place: "@Baani Square",
      availableDate: "15th March 2024",
    },
    {
      imageUrl:
        "https://png.pngtree.com/thumb_back/fw800/background/20240106/pngtree-coloful-nature-beautiful-scenery-image_15576032.jpg",
      city: "Alibaug",
      place: "@Chondi",
      availableDate: "4th june 2024",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/14/33/fb/1433fb4522dccc1b84a845e1d1f8b63e.jpg",
      city: "Pachmadhi",
      place: "@Nature",
      availableDate: "18th july 2024",
    },
  ];
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

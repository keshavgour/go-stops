import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styleDestinationDetails } from "../../style/styleDestinationDetails";
import { ReadMore } from "./ReadMore";
import { AntDesign } from "@expo/vector-icons";
import OurHostels from "./OurHostels";
import { ourhostelsData } from "../../ourHostelsData";
import LocalExperiences from "./LocalExperiences";
import { localExperiencesData } from "../../localExperiencesData";

const image = {
  uri: "https://t3.ftcdn.net/jpg/01/40/51/56/360_F_140515612_0MMpqpsIvs6xno5YXmPVy9FUmZ4uLnFB.jpg",
};

const DestinationDetails: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const clickShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ScrollView>
      <View>
        <ImageBackground source={image} style={styleDestinationDetails.image}>
          <View style={styleDestinationDetails.overlay}>
            <Text style={styleDestinationDetails.city}>GOA</Text>
            <Text style={styleDestinationDetails.places}>
              Of Beaches, Nightlife, and Parties
            </Text>
          </View>
        </ImageBackground>
        <View>
          <Text style={styleDestinationDetails.text}>
            Pristine beaches, clear blue skies, lush green palm trees and
            full-on party vibes! Goa is definitely one of the most loved tourist
            destinations in India. Whether you want a relaxing vacation or if
            you want to party throughout the night, Goa has got it all. Not just
            for beach lovers, Goa is an ideal destination for water sport lovers
            as well as admirers of Art and History.
          </Text>
        </View>
        <View>
          {showMore && <ReadMore />}
          <TouchableOpacity onPress={clickShowMore}>
            <View style={styleDestinationDetails.showMoreContainer}>
              <Text style={styleDestinationDetails.showMoreText}>
                {" "}
                {showMore ? "Read less" : "Read more"}
              </Text>
              <AntDesign
                name={showMore ? "up" : "down"}
                size={18}
                color={"#F00A6C"}
                style={{ paddingTop: 5, paddingLeft: 4 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <OurHostels data={ourhostelsData} />
        <LocalExperiences localExperiencesData={localExperiencesData} />
      </View>
    </ScrollView>
  );
};

export default DestinationDetails;

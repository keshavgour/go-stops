import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-paper";

const BookHostel: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const onLocationPress = () => {
    console.log("Location");
  };

  const onHostelPress = () => {
    console.log("Hostel");
  };

  const onCheckInPress = () => {
    console.log("Check-In");
  };

  const onCheckOutPress = () => {
    console.log("Check-Out");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greyColor}>Hostel</Text>
      <TouchableOpacity style={styles.button} onPress={onLocationPress}>
        <FontAwesome name="map-marker" size={24} />
        <View style={styles.text}>
          <Text style={{ color: "grey", fontWeight: "bold" }}>
            Select Hostel
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.horizontalLine} />

      <View style={styles.dateContainer}>
        <TouchableOpacity style={styles.dateButton} onPress={onCheckInPress}>
          <View style={styles.dateAlign}>
            <View>
              <Text style={styles.greyColor}>Check-in</Text>
            </View>
            <View style={styles.dateHori}>
              <View>
                <FontAwesome name="calendar" size={24} />
              </View>
              <View>
                <Text style={styles.text}>
                  {checkInDate ? checkInDate.toDateString() : "Fri, 17 May 24"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.dashedLine} />
        <TouchableOpacity style={styles.dateButton} onPress={onCheckInPress}>
          <View style={styles.dateAlign}>
            <View>
              <Text style={styles.greyColor}>Check-out</Text>
            </View>
            <View style={styles.dateHori}>
              <View>
                <FontAwesome name="calendar" size={24} />
              </View>
              <View>
                <Text style={styles.text}>
                  {checkInDate ? checkInDate.toDateString() : "Sat, 18 May 24"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 16,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 22,
    backgroundColor: "#F4F5F4",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  dateAlign: {
    flexDirection: "column",
  },
  dateHori: {
    flexDirection: "row",
    paddingTop: 9,
  },
  greyColor: {
    color: "grey",
  },
  horizontalLine: {
    height: 1,
    marginVertical: 16,
    backgroundColor: "lightgrey",
  },
  dashedLine: {
    width: 30,
    height: 1,
    marginTop: 35,
    borderWidth: 1.3,
    borderStyle: "dashed",
    borderColor: "grey",
  },
});

export default BookHostel;

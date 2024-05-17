import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { styleBookHostel } from "../../style/styleBookHostel";
import { hostels } from "../../hostelData";

const BookHostel: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [showHostelModal, setShowHostelModal] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState<string>("");

  const onCheckInPress = () => {
    setShowCheckInPicker(true);
  };

  const onCheckOutPress = () => {
    setShowCheckOutPicker(true);
  };

  const selectHostel = () => {
    setShowHostelModal(true);
  };

  const onHostelSelect = (hostel: string) => {
    setSelectedHostel(hostel);
    setShowHostelModal(false);
  };

  const onCheckInChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || checkInDate;
    setShowCheckInPicker(Platform.OS === "ios");
    setCheckInDate(currentDate);
  };

  const onCheckOutChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    const currentDate = selectedDate || checkOutDate;
    setShowCheckOutPicker(Platform.OS === "ios");
    setCheckOutDate(currentDate);
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <View style={styleBookHostel.container}>
      <Text style={styleBookHostel.greyColor}>Hostel</Text>
      <TouchableOpacity style={styleBookHostel.button} onPress={selectHostel}>
        <FontAwesome name="map-marker" size={24} />
        <View style={styleBookHostel.text}>
          <Text style={{ color: "grey", fontWeight: "bold" }}>
            {selectedHostel || "Select Hostel"}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styleBookHostel.horizontalLine} />

      <View style={styleBookHostel.dateContainer}>
        <TouchableOpacity
          style={styleBookHostel.dateButton}
          onPress={onCheckInPress}
        >
          <View style={styleBookHostel.dateAlign}>
            <View>
              <Text style={styleBookHostel.greyColor}>Check-in</Text>
            </View>
            <View style={styleBookHostel.dateHori}>
              <View>
                <FontAwesome name="calendar" size={22} />
              </View>
              <View>
                <Text style={styleBookHostel.text}>
                  {checkInDate ? formatDate(checkInDate) : "Fri, 17 May 24"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styleBookHostel.dashedLine} />

        <TouchableOpacity
          style={styleBookHostel.dateButton}
          onPress={onCheckOutPress}
        >
          <View style={styleBookHostel.dateAlign}>
            <View>
              <Text style={styleBookHostel.greyColor}>Check-out</Text>
            </View>
            <View style={styleBookHostel.dateHori}>
              <View>
                <FontAwesome name="calendar" size={22} />
              </View>
              <View>
                <Text style={styleBookHostel.text}>
                  {checkOutDate ? formatDate(checkOutDate) : "Sat, 18 May 24"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {showCheckInPicker && (
        <DateTimePicker
          value={checkInDate || new Date()}
          mode="date"
          display="default"
          onChange={onCheckInChange}
        />
      )}

      {showCheckOutPicker && (
        <DateTimePicker
          value={checkOutDate || new Date()}
          mode="date"
          display="default"
          onChange={onCheckOutChange}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showHostelModal}
        onRequestClose={() => {
          setShowHostelModal(!showHostelModal);
        }}
      >
        <View style={styleBookHostel.modalView}>
          <FlatList
            data={hostels}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styleBookHostel.modalItem}
                onPress={() => onHostelSelect(item.name)}
              >
                <Text style={styleBookHostel.modalText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default BookHostel;

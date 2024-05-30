import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonComponent from "../../components/ButtonComponent";
import { styleOurHostel } from "../../style/styleOurHostel";
import { styleButton } from "../../style/styleButton";
import { Hostel, ImageData } from "../../interfaces/interfaceDisplay";

interface Props {
  data: Hostel[];
}

const OurHostels: React.FC<Props> = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<ImageData[]>([]);

  const handleImagePress = (images: ImageData[], index: number) => {
    setCurrentImages(images);
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styleOurHostel.container}>
      <Text style={styleOurHostel.heading}>OUR HOSTELS AT GOA</Text>
      {data.map((hostel, hostelIndex) => (
        <View key={hostelIndex}>
          <View style={styleOurHostel.imagesContainer}>
            <View style={styleOurHostel.leftColumn}>
              <TouchableOpacity
                onPress={() => handleImagePress(hostel.images, 0)}
              >
                <Image
                  source={{ uri: hostel.images[0].uri }}
                  style={styleOurHostel.largeImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styleOurHostel.rightColumn}>
              <TouchableOpacity
                onPress={() => handleImagePress(hostel.images, 1)}
              >
                <Image
                  source={{ uri: hostel.images[1].uri }}
                  style={styleOurHostel.smallImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleImagePress(hostel.images, 2)}
              >
                <Image
                  source={{ uri: hostel.images[2].uri }}
                  style={styleOurHostel.smallImage1}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styleOurHostel.hostelName}>{hostel.name}</Text>
          <View style={styleOurHostel.locationAlign}>
            <Ionicons name="location-sharp" size={22} color={"#6A5ACD"} />
            <Text style={styleOurHostel.address}>{hostel.address}</Text>
          </View>
          <View style={styleOurHostel.horizontalAlign}>
            <View>
              <Text>Dorms starting from</Text>
              <Text style={styleOurHostel.price}>{hostel.dormPrice}</Text>
            </View>
            <View style={styleOurHostel.textPadding}>
              <Text>Private room starting from</Text>
              <Text style={styleOurHostel.price}>
                {hostel.privateRoomPrice}
              </Text>
            </View>
          </View>
          <ButtonComponent
            name="VIEW AND BOOK"
            onPress={() => console.log("View and Book Pressed")}
            buttonStyle={styleButton.viewAndBookButton}
            textStyle={styleButton.buttonText}
            mode="contained"
          />
          <View style={styleOurHostel.horizontalLine}></View>
        </View>
      ))}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styleOurHostel.modalContainer}>
          <FlatList
            data={currentImages}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.uri }}
                style={styleOurHostel.fullImage}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            initialScrollIndex={selectedImageIndex}
            getItemLayout={(data, index) => ({
              length: Dimensions.get("window").width,
              offset: Dimensions.get("window").width * index,
              index,
            })}
          />
          <TouchableOpacity
            style={styleOurHostel.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styleOurHostel.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default OurHostels;

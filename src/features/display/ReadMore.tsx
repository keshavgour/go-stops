import React from "react";
import { Text, View } from "react-native";
import FamousPoints from "./FamousPoints";
import { styleReadMore } from "../../style/styleReadMore";
import { famousPointsData } from "../../famousPointsData";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface ClimateInfoProps {
  icon: React.ReactNode;
  temperature: string;
}

const ClimateInfo: React.FC<ClimateInfoProps> = ({ icon, temperature }) => (
  <View style={styleReadMore.climate}>
    {icon}
    <Text style={styleReadMore.temp}>{temperature}</Text>
  </View>
);

interface TravelInfoProps {
  icon: React.ReactNode;
  mode: string;
  description: string;
}

const TravelInfo: React.FC<TravelInfoProps> = ({ icon, mode, description }) => (
  <>
    <View style={styleReadMore.climate}>
      {icon}
      <Text style={styleReadMore.mode}>{mode}</Text>
    </View>
    <Text style={styleReadMore.description}>{description}</Text>
  </>
);

export const ReadMore: React.FC = () => {
  const climateData: ClimateInfoProps[] = [
    {
      icon: <FontAwesome name="snowflake-o" size={28} color="#60B1DA" />,
      temperature: "20°C - 30°C November to February",
    },
    {
      icon: <Feather name="sun" size={28} color="orange" />,
      temperature: "25°C - 35°C March to May",
    },
    {
      icon: <FontAwesome name="snowflake-o" size={28} color="#60B1DA" />,
      temperature: "25°C - 35°C June to September",
    },
  ];

  const travelData: TravelInfoProps[] = [
    {
      icon: <MaterialIcons name="airplanemode-on" size={30} color="#F00A6C" />,
      mode: "By Air",
      description:
        "The Dabolim Airport is Goa's international airport, catering to both domestic and international flights. Goa is well connected to major international destinations like Dubai, London, Kuala Lumpur and Moscow among others.",
    },
    {
      icon: <MaterialIcons name="train" size={30} color="#F00A6C" />,
      mode: "By Train",
      description:
        "Sandwiched between Karnataka and Maharashtra, Goa is well-connected to different parts of the country via rail networks. Vasco da Gama Railway Station and Madgaon Station are the two major railheads in Goa. These stations are connected with Mumbai, Delhi, Bangalore and other major cities of the country.",
    },
    {
      icon: (
        <MaterialIcons name="directions-bus-filled" size={30} color="#F00A6C" />
      ),
      mode: "By Road",
      description:
        "Road trips to Goa are the most popular way of traveling to the destination, jamming on songs in a bus/car with your entire group of friends on smooth highways while looking at serene green landscapes is definitely the way to go! Goa is connected with n number of buses from Mumbai, Pune, Bangalore etc.",
    },
  ];

  return (
    <View style={styleReadMore.containers}>
      <Text style={styleReadMore.heading}>REASONS TO VISIT GOA</Text>
      <FamousPoints famousPointsData={famousPointsData} />
      <Text style={styleReadMore.heading}>BEST TIME TO VISIT</Text>
      {climateData.map((climate, index) => (
        <ClimateInfo
          key={index}
          icon={climate.icon}
          temperature={climate.temperature}
        />
      ))}
      <Text style={styleReadMore.description}>
        With pleasant and comfortable weather, the perfect time to visit the
        Goan party town is definitely during November to February.
      </Text>
      <Text style={styleReadMore.description}>
        November to February: The best time to visit Goa is definitely from
        November to February, when the weather is pleasant and sky is clear. The
        temperature at the time lies between 20 to 30 degrees and is considered
        to be the ideal time to visit Goa. Not to forget, February marks the
        advent of the Goa Carnival, the most popular fiesta in Goa.
      </Text>
      <Text style={styleReadMore.description}>
        March to May: The weather from March to May is extremely hot and humid,
        with the temperature ranging from 25 to 35 degrees, it is not advisable
        to visit Goa at the time.
      </Text>
      <Text style={styleReadMore.description}>
        June to September: Monsoons from June to September are another great
        time to visit Goa, if you love the beach during rains!
      </Text>
      <View style={styleReadMore.horizontalLine} />
      <Text style={styleReadMore.heading}>HOW TO REACH GOA</Text>
      {travelData.map((travel, index) => (
        <TravelInfo
          key={index}
          icon={travel.icon}
          mode={travel.mode}
          description={travel.description}
        />
      ))}
    </View>
  );
};

// import React from "react";
// import { Text, View } from "react-native";
// import FamousPoints from "./FamousPoints";
// import { styleReadMore } from "../../style/styleReadMore";
// import { famousPointsData } from "../../famousPointsData";
// import { Feather } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";

// export const ReadMore = () => {
//   return (
//     <View style={styleReadMore.containers}>
//       <Text style={styleReadMore.heading}>REASONS TO VISIT GOA</Text>
//       <FamousPoints famousPointsData={famousPointsData} />
//       <Text style={styleReadMore.heading}>BEST TIME TO VISIT</Text>
//       <View style={styleReadMore.climate}>
//         <FontAwesome name="snowflake-o" size={28} color="#60B1DA" />
//         <Text style={styleReadMore.temp}>
//           20&#176;C - 30&#176;C November to February
//         </Text>
//       </View>
//       <View style={styleReadMore.climate}>
//         <Feather name="sun" size={28} color="orange" />
//         <Text style={styleReadMore.temp}>
//           25&#176;C - 35&#176;C March to May
//         </Text>
//       </View>
//       <View style={styleReadMore.climate}>
//         <FontAwesome name="snowflake-o" size={28} color="#60B1DA" />
//         <Text style={styleReadMore.temp}>
//           25&#176;C - 35&#176;C June to September
//         </Text>
//       </View>
//       <Text style={styleReadMore.description}>
//         With pleasant and comfortable weather, the perfect time to visit the
//         Goan party town is definitely during November to February.
//       </Text>
//       <Text style={styleReadMore.description}>
//         November to February: The best time to visit Goa is definitely from
//         November to February, when the weather is pleasant and sky is clear. The
//         temperature at the time lies between 20 to 30 degrees and is considered
//         to be the ideal time to visit Goa. Not to forget, February marks the
//         advent of the Goa Carnival, the most popular fiesta in Goa.
//       </Text>
//       <Text style={styleReadMore.description}>
//         March to May: The weather from March to May is extremely hot and humid,
//         with the temperature ranging from 25 to 35 degrees, it is not advisable
//         to visit Goa at the time.
//       </Text>
//       <Text style={styleReadMore.description}>
//         June to September: Monsoons from June to September are another great
//         time to visit Goa, if you love the beach during rains!
//       </Text>
//       <View style={styleReadMore.horizontalLine} />
//       <Text style={styleReadMore.heading}>HOW TO REACH GOA</Text>
//       <View style={styleReadMore.climate}>
//         <MaterialIcons name="airplanemode-on" size={30} color="#F00A6C" />
//         <Text style={styleReadMore.mode}>By Air</Text>
//       </View>
//       <Text style={styleReadMore.description}>
//         The Dabolim Airport is Goa's international airport, catering to both
//         domestic and international flights. Goa is well connected to major
//         international destinations like Dubai, London, Kuala Lumpur and Moscow
//         among others.
//       </Text>
//       <View style={styleReadMore.climate}>
//         <MaterialIcons name="train" size={30} color="#F00A6C" />
//         <Text style={styleReadMore.mode}>By Train</Text>
//       </View>
//       <Text style={styleReadMore.description}>
//         Sandwiched between Karnataka and Maharashtra, Goa is well- connected to
//         different parts of the country via rail networks. Vasco da Gama Railway
//         Station and Madgaon Station are the two major railheads in Goa. These
//         stations are connected with Mumbai, Delhi, Bangalore and other major
//         cities of the country.
//       </Text>
//       <View style={styleReadMore.climate}>
//         <MaterialIcons name="directions-bus-filled" size={30} color="#F00A6C" />
//         <Text style={styleReadMore.mode}>By Road</Text>
//       </View>
//       <Text style={styleReadMore.description}>
//         Road trips to Goa are the most popular way of traveling to the
//         destination, jamming on songs in a bus/car with your entire group of
//         friends on smooth highways while looking at serene green landscapes is
//         definitely the way to go! Goa is connected with n number of buses from
//         Mumbai, Pune, Bangalore etc.
//       </Text>
//     </View>
//   );
// };

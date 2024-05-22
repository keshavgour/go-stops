import React from "react";
import { StatusBar } from "expo-status-bar";
import DashboardPage from "./src/pages/DashboardPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DestinationDetailsPage from "./src/pages/DestinationDetailsPage";

export type RootStackParamList = {
  Dashboard: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="Details" component={DestinationDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

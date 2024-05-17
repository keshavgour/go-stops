import { StatusBar } from "expo-status-bar";
import DashboardPage from "./src/pages/DashboardPage";
import { StyleSheet, View } from "react-native";
//import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <View>
      <DashboardPage />
    </View>
  );
}

// style={styles.container}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./components/BottomNav/BottomNav";
export default function App() {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
}

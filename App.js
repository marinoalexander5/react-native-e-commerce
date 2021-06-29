// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import "react-native-gesture-handler";
import Screen from "./app/components/Screen";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";


const categories = [
  {
    label: 'Funiture', value: '1'
  },
  {
    label: 'Clothing', value: '2'
  },
  {
    label: 'Camera', value: '3'
  },

]

export default function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <Screen>
      <AppPicker 
        placeholder="Category"
        icon="apps"
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories} />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}

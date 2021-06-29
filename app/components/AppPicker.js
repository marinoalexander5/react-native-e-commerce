import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";

import defaultStyles from "../config/styles";
import colors from "../config/colors";
import { TouchableWithoutFeedback, Modal, Button } from "react-native";
import PickerItem from "./PickerItem";

import AppText from "./AppText";

function AppPicker({ icon, placeholder, onSelectItem, selectedItem, items }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
            style={styles.text}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={item => item.value}
              renderItem={({ item }) => 
                <PickerItem 
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
              />}
              />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    // flex: 1,
  },
});

import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  return (
    // <View style={styles.Container}>
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Title}>Wellcome, Evandro</Text>
      <TextInput
        style={styles.Input}
        placeholder="New skill"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.Title, { marginTop: 50 }]}>MySkills</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  Title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  Input: {
    backgroundColor: "#1F1e25",
    color: "#FFF",
    fontSize: 18,
    // padding: 15, No ios fica estranho sem o padding
    padding: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 15,
  },
  Button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  ButtonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});

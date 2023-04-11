import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CallingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.callerInfo}>
        {/* <Image source={require("../../assets/splash.png")} style={styles.avatar} /> */}
        <View style={styles.callerDetails}>
          <Text style={styles.callerName}>John Doe</Text>
          <Text style={styles.callerStatus}>Calling...</Text>
        </View>
      </View>
      <View style={styles.callerActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="ios-mic-off" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="ios-volume-high" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="ios-call" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    // position:"absolute"
  },
  //   callerInfo: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     marginBottom: 300,
  //     marginLeft: 50,
  //     // position: "absolute",
  //   },
  //   avatar: {
  //     width: 70,
  //     height: 70,
  //     borderRadius: 35,
  //     marginRight: 20,
  //   },
  callerDetails: {
    // flex: 0,
    alignItems: "center",
       marginTop: -200,
      marginLeft: 110,
      position: "absolute",
    //   justifyContent: "center"
  },
  callerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  callerStatus: {
    fontSize: 18,
    color: "#888",
  },
  callerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
    marginBottom: 20,
    marginLeft: 50,
    position: "absolute",
  },
  actionButton: {
    backgroundColor: "#333",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function DialPad() {
  const [number, setNumber] = useState("");

  function handlePress(value) {
    setNumber(number + value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("1")}
        >
          <Text style={styles.label}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("2")}
        >
          <Text style={styles.label}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("3")}
        >
          <Text style={styles.label}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("4")}
        >
          <Text style={styles.label}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("5")}
        >
          <Text style={styles.label}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("6")}
        >
          <Text style={styles.label}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("7")}
        >
          <Text style={styles.label}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("8")}
        >
          <Text style={styles.label}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("9")}
        >
          <Text style={styles.label}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("*")}
        >
          <Text style={styles.label}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.label}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("#")}
        >
          <Text style={styles.label}>#</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonn}
          onPress={() => handlePress("")}
        >
          <Text style={styles.label}></Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 64,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  buttonn: {
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ff00",
  },
  label: {
    fontSize: 32,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <DialPad />
    </View>
  );
}

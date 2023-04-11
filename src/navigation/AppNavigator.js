import { createStackNavigator } from "@react-navigation/stack";
import DialPad from "../screens/DialpadScreen";
import Calling from "../screens/CallingScreen"
import React from "react";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dial" component={DialPad} />
      <Stack.Screen name="Calling" component={Calling} />
    </Stack.Navigator>
  );
}

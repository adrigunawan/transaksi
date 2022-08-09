import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transaksi from "../Screens/Transaksi";

const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Invoice CV4567" component={Transaksi} />
    </Stack.Navigator>
  );
}

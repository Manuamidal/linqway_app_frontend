import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PrescriptionsReportsScreen from "../screens/PrescriptionsReportsScreen";

export type HomeStackParamList = {
  HomeMain: undefined;
  PrescriptionsReports: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrescriptionsReports"
        component={PrescriptionsReportsScreen}
        options={{
          title: "Prescriptions & Reports",
          headerShown:true
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

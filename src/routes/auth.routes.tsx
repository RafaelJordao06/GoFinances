import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

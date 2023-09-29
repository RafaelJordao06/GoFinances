import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const dataKey = "@gofinances:user";

      const response = await AsyncStorage.getItem(dataKey);
      const responseFormatted = response ? JSON.parse(response) : null;
      setUserData(responseFormatted);
    }

    fetchUserData();
  }, []);

  console.log(userData); // agora vai exibir os dados reais ou null se ainda não estiverem disponíveis

  return (
    <NavigationContainer>
      {userData ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

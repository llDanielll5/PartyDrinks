import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import HomeScreen from "../../screens/home";
import Onboarding from "../../screens/onboarding";
import { getFirstAccess } from "../../services/firstAccess";

const Routes = () => {
  const [isOnboarding, setIsOnboarding] = useState<boolean | null>(null);
  const Stack = createNativeStackNavigator();

  const firstAccess = async () => {
    await getFirstAccess().then((res) => {
      if (res === true) setIsOnboarding(true);
      else setIsOnboarding(false);
    });
  };

  useEffect(() => {
    firstAccess();
  }, []);

  if (isOnboarding === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboarding && (
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

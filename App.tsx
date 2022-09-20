const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CT3 from "./screens/CT3";
import CT2 from "./screens/CT2";
import CTStart from "./screens/CTStart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="CT3"
              component={CT3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CT2"
              component={CT2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CTStart"
              component={CTStart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

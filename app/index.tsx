import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "./Screens/MainScreen";
import Detail from "./Screens/Detail";
import HeartContext from "./context/HeartContext";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hearts, setHearts] = useState({});
  const heartContextValue = useMemo(() => ({ hearts, setHearts }), [hearts]);

  return (
    <HeartContext.Provider value={heartContextValue}>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </HeartContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

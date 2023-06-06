import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/redux";

import HomeScreen from "./src/screens/HomeScreen";

const App = function () {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <HomeScreen />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;

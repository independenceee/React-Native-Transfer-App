import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const styles = {
    container: ``,
};

const HomeScreen = function () {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={require("../../assets/images/Logo.png")}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

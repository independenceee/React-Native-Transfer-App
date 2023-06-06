import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
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
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    // query={{
                    //     key: GOOGLE_MAPS_APIKEY,
                    //     language: "vi",
                    // }}
                    debounce={400}
                    placeholder="Where from ?"
                    nearbyPlacesAPI="GooglePlaceSearch"
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

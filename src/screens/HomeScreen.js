import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";

const HomeScreen = function () {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={require("../../assets/images/Logo.png")}
                />
                <GooglePlacesAutocomplete
                    onPress={function (data, details = null) {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            }),
                        );
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en",
                    }}
                    debounce={400}
                    placeholder="Where From ?"
                    nearbyPlacesAPI="GooglePlaceSearch"
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

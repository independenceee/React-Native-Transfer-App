import React from "react";
import tw from "tailwind-react-native-classnames";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = function () {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>
                Good Morning, Nguyễn Khánh
            </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={toInputBoxStyles}
                        placeholder="Where To ?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en",
                        }}
                        onPress={function (data, details = null) {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }),
                            );

                            navigation.navigate("RideOptionsCard");
                        }}
                    />
                </View>
                <NavFavourites />
            </View>
            <View
                style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
            >
                <TouchableOpacity
                    onPress={function () {
                        return navigation.navigate("RideOptionsCard");
                    }}
                    style={tw`flex flex-row justify-evenly bg-black w-24 py-3 px-4 rounded-full`}
                >
                    <Icon
                        name="car"
                        type="font-awesome"
                        color={"white"}
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={tw`flex flex-row justify-between w-24 py-3 px-4 rounded-full`}
                >
                    <Icon
                        name="fast-food-outline"
                        type="ionicon"
                        color={"black"}
                        size={16}
                    />
                    <Text style={tw` text-center`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: 20,
        backgroundColor: "white",
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 4,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});

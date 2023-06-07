import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../redux/slices/navSlice";

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: function () {
            return (
                <Image
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: "contain",
                    }}
                    source={require("../../assets/images/Car.jpg")}
                />
            );
        },
        screen: "MapScreen",
    },
    {
        id: 2,
        title: "Order food",
        image: function () {
            return (
                <Image
                    style={{
                        width: 120,
                        height: 120,
                        resizeMode: "contain",
                    }}
                    source={require("../../assets/images/Food.jpg")}
                />
            );
        },
        screen: "EatsScreen",
    },
];

const NavOptions = function () {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList
            data={data}
            keyExtractor={function (item) {
                return item.id;
            }}
            horizontal
            renderItem={function ({ item }) {
                return (
                    <TouchableOpacity
                        onPress={function () {
                            return navigation.navigate(item.screen);
                        }}
                        // disabled={!origin}
                        style={tw`p-2 pl-6 pb-8 pt-4 rounded bg-gray-200 m-2 w-40`}
                    >
                        <View style={tw`${!origin && "opacity-20"}`}>
                            {item.image()}

                            <Text style={tw`mt-2 text-lg font-semibold`}>
                                {item.title}
                            </Text>
                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name="arrowright"
                                color="white"
                                type="antdesign"
                            />
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default NavOptions;

import React from "react";
import tw from "tailwind-react-native-classnames";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const data = [
    {
        id: 1,
        icon: "home",
        location: "Home",
        destination: "Lang Street, Hà Nội, Việt Nam",
    },
    {
        id: 2,
        icon: "briefcase",
        location: "Work",
        destination: "Hai Duong, Viet Nam",
    },
];

const NavFavourites = function () {
    return (
        <FlatList
            data={data}
            keyExtractor={function (item) {
                return item.id;
            }}
            ItemSeparatorComponent={function () {
                return (
                    <View style={[tw`bg-gray-200 `, { height: 0.5 }]}></View>
                );
            }}
            renderItem={function ({ item: { location, destination, icon } }) {
                return (
                    <TouchableOpacity style={tw`flex-row items-center p-5`}>
                        <Icon
                            name={icon}
                            size={18}
                            color="white"
                            type="ionicon"
                            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        />
                        <View>
                            <Text style={tw`font-semibold text-xl`}>
                                {location}
                            </Text>
                            <Text style={tw`text-gray-500`}>{destination}</Text>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default NavFavourites;

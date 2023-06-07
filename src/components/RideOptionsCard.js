import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInfomation } from "../redux/slices/navSlice";

const data = [
    {
        id: 1,
        title: "InDep X",
        price: 20,
        multiplier: 1,
        image: function () {
            return (
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={require("../../assets/images/IDPX.jpg")}
                />
            );
        },
    },
    {
        id: 2,
        title: "InDep XL",
        price: 50,
        multiplier: 1.2,
        image: function () {
            return (
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={require("../../assets/images/IDPXL.jpg")}
                />
            );
        },
    },
    {
        id: 3,
        title: "InDep LUX",
        price: 100,

        multiplier: 1.75,
        image: function () {
            return (
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={require("../../assets/images/IDPLUX.jpg")}
                />
            );
        },
    },
];

const SURGE_CHANGE_RATE = 1.5;

const RideOptionsCard = function () {
    const navigation = useNavigation();
    const travelTimeInfomation = useSelector(selectTravelTimeInfomation);
    const [selected, setSelected] = useState(null);
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-3 z-50 left-5 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>
                    Select a Ride - {travelTimeInfomation?.distance?.text}
                </Text>
                <FlatList
                    data={data}
                    keyExtractor={function (item) {
                        return item.id;
                    }}
                    renderItem={function ({
                        item: { id, title, image, price, multiplier },
                        item,
                    }) {
                        return (
                            <TouchableOpacity
                                onPress={function () {
                                    return setSelected(item);
                                }}
                                style={tw`flex-row justify-between items-center px-10 ${
                                    id === selected?.id && "bg-gray-200"
                                }`}
                            >
                                {image()}
                                <View style={tw`-ml-6`}>
                                    <Text style={tw`text-xl font-semibold`}>
                                        {title}
                                    </Text>
                                    <Text>Travel time...</Text>
                                </View>
                                <Text style={tw`text-xl`}>
                                    {new Intl.NumberFormat("en-gb", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(
                                        (travelTimeInfomation?.duration?.value *
                                            SURGE_CHANGE_RATE *
                                            multiplier) /
                                            100,
                                    )}
                                    $
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
                <View style={tw`mt-auto border-t border-gray-200`}>
                    <TouchableOpacity
                        style={tw`bg-black text-xl py-3 m-3 rounded-lg ${
                            !selected && "bg-gray-300"
                        }`}
                    >
                        <Text style={tw`text-center text-white text-xl`}>
                            Choose {selected?.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard;

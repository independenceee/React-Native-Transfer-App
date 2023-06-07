import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
    selectDestination,
    selectOrigin,
    setTravelTimeInfomation,
} from "../redux/slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = function () {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) {
            return;
        }

        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: {
                top: 50,
                right: 50,
                bottom: 50,
                left: 50,
            },
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async function () {
            try {
                fetch("")
                    .then((response) => response.json())
                    .then((data) => {
                        dispatch(
                            setTravelTimeInfomation(data?.rows[0].elements[0]),
                        );
                    });
            } catch (error) {
                console.log(error);
            }
        };
    }, [origin, destination, GOOGLE_MAPS_APIKEY]);
    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: 21.028511,
                longitude: 105.804817,
                // latitude: origin.location.lat,
                // longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: 21.028511,
                        longitude: 105.804817,
                        // latitude: origin.location.lat,
                        // longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: 22.028511,
                        longitude: 107.804817,
                        // latitude: destination.location.lat,
                        // longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
};

export default Map;

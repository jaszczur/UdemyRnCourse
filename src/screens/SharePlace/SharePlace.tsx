import React, { FunctionComponent } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-navigation";
import { DefaultInput } from "../../components/ui/DefaultInput";
import { HeadingText } from "../../components/ui/HeadingText";
import { DefaultButton } from "../../components/ui/DefaultButton";

export const SharePlaceScreen: FunctionComponent = () => {
    // const dispatch = useDispatch();

    // const handlePlaceAdded = (placeName: string) => {
    //     dispatch(addPlace({
    //         name: placeName,
    //         key: Math.random().toString(),
    //         image: require("../../assets/amazing04.jpg")
    //     }))
    // };

    const pickImage = () => { };
    const locateMe = () => { };
    const shareThePlace = () => { };

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeadingText>Share a place with us!</HeadingText>

                <View style={styles.placeholder}>
                    <Image source={require("../../assets/amazing04.jpg")} style={styles.imagePreview}/>
                </View>
                <DefaultButton title="Pick image" onPress={pickImage} />

                <View style={styles.placeholder}>
                    <Text>Map</Text>
                </View>
                <DefaultButton title="Locate me" onPress={locateMe} />

                <DefaultInput placeholder="Place name" />
                <DefaultButton title="Share the place" onPress={shareThePlace} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 250
    },
    imagePreview: {
        width: "100%",
        height: "100%"
    }
});

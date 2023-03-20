import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import SignIn from "./components/SignIn";

export default function App() {
    return (
        // <ImageBackground
        //     style={{ width: "100%", height: "100%" }}
        //     source={{
        //         uri: "https://images.unsplash.com/photo-1601522059590-309b7edbcda5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        //     }}
        //     imageStyle
        //     resizeMode="cover"
        // >
        <View style={styles.container}>
            <SignIn />
            <StatusBar style="auto" />
        </View>
        // </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
    },
});

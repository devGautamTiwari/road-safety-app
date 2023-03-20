import { useRef } from "react";
import { StyleSheet, TextInput, View, Pressable } from "react-native";
import StyledText from "./StyledText";

const InputGroup = ({ label, ...inputProps }) => {
    const inputRef = useRef(null);
    return (
        <View style={styles.inputGroup}>
            <StyledText
                style={styles.label}
                onPress={() => inputRef?.current?.focus()}
            >
                {label}
            </StyledText>
            <TextInput
                ref={inputRef}
                style={styles.input}
                {...inputProps}
            ></TextInput>
        </View>
    );
};
export default function SignIn() {
    return (
        <View style={styles.container}>
            <StyledText style={styles.heading}>Sign In</StyledText>
            <StyledText style={styles.subheading}>To Road Safety 🪖</StyledText>
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <InputGroup
                        label="Email/Mobile"
                        placeholder="Email/Mobile..."
                        placeholderTextColor={"#aaa"}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <InputGroup
                        label="Password"
                        secureTextEntry={true}
                        placeholder="Password..."
                        placeholderTextColor={"#aaa"}
                    />
                </View>
                <Pressable style={styles.btn}>
                    <StyledText style={{ fontSize: "1rem" }}>
                        Sign in
                    </StyledText>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxWidth: "350px",
        marginInline: "auto",
        // border: "1px solid red",
    },
    heading: {
        fontSize: "3em",
        fontWeight: "900",
        textAlign: "center",
    },
    subheading: {
        textAlign: "center",
        marginTop: "1em",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5em",
        marginTop: "1.25em",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "0.5em",
        fontSize: "0.8em",
        width: "fit-content",
        cursor: "default",
        opacity: "0.75",
    },
    input: {
        padding: "1em",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.25)",
        borderRadius: "0.25em",
    },
    btn: {
        width: "100%",
        border: "1px solid black",
        textAlign: "center",
        paddingBlock: "1em",
        borderRadius: "0.25em",
    },
});

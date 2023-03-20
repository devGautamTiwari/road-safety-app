import { Text } from "react-native";

export default function StyledText({ style, children, ...props }) {
    return (
        <Text
            style={{
                fontFamily: "Inter",
                ...style,
            }}
            {...props}
        >
            {children}
        </Text>
    );
}
